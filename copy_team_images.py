import shutil
import os

def copy_dirs():
    base_dir = r"d:\work\GTAVI-main"
    
    src_faculty = os.path.join(base_dir, "faculty images")
    dst_faculty = os.path.join(base_dir, "public", "faculty images")
    
    src_student = os.path.join(base_dir, "student images")
    dst_student = os.path.join(base_dir, "public", "student images")
    
    if os.path.exists(src_faculty):
        if os.path.exists(dst_faculty):
            shutil.rmtree(dst_faculty)
        shutil.copytree(src_faculty, dst_faculty)
        print("Copied faculty images to public/faculty images successfully.")
        
    if os.path.exists(src_student):
        if os.path.exists(dst_student):
            shutil.rmtree(dst_student)
        shutil.copytree(src_student, dst_student)
        print("Copied student images to public/student images successfully.")

if __name__ == "__main__":
    copy_dirs()
