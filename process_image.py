import cv2
import numpy as np
from PIL import Image

def test_cut():
    bgr = cv2.imread("assets/fore.png")
    h, w = bgr.shape[:2]
    
    # 1. Background mask: all pixels near (255, 255, 255)
    # Distance from white
    diff = 255 - bgr.astype(np.float32)
    max_diff = np.max(diff, axis=-1)
    
    # We can create a mask where max_diff < 15 is background
    # Let's also do connected components so only background connected to outside (or holes) is removed
    # As we saw, the entire white area is background!
    # Let's compute smooth alpha
    alpha = np.clip((max_diff - 4.0) / 20.0, 0.0, 1.0)
    
    # Unpremultiply white to prevent white fringing/halos
    # C = alpha * F + (1 - alpha) * 255
    # F = (C - (1 - alpha) * 255) / alpha
    # Where alpha > 0.05
    rgb = cv2.cvtColor(bgr, cv2.COLOR_BGR2RGB).astype(np.float32)
    
    # Defringing / unpremultiplying:
    safe_alpha = np.maximum(alpha[:, :, None], 0.05)
    unpremult = (rgb - (1.0 - alpha[:, :, None]) * 255.0) / safe_alpha
    unpremult = np.clip(unpremult, 0.0, 255.0)
    
    # For pixels where alpha is near 0, keep original rgb
    final_rgb = np.where(alpha[:, :, None] > 0.05, unpremult, rgb)
    
    rgba = np.dstack([final_rgb, alpha * 255.0]).astype(np.uint8)
    
    # Save output to public/fore.png
    out_img = Image.fromarray(rgba, mode="RGBA")
    out_img.save("public/fore.png", format="PNG")
    print("Saved public/fore.png successfully!")

    # Test composite onto black background
    black_bg = np.zeros((h, w, 3), dtype=np.float32)
    alpha_3 = alpha[:, :, None]
    comp_black = (final_rgb * alpha_3 + black_bg * (1 - alpha_3)).astype(np.uint8)
    Image.fromarray(comp_black).save("scratch_comp_black.png")
    print("Saved scratch_comp_black.png")

test_cut()
