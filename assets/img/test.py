img_="xzc18"
src_name=img_+".jpg"
dst_name=img_+".png"

import cv2

img=cv2.imread(src_name)

rows,cols=img.shape[:2]
dst=cv2.resize(img,(int(cols/2),int(rows/2)),interpolation=cv2.INTER_LINEAR)
cv2.imwrite(dst_name,dst)

cv2.imshow("src",img)
cv2.imshow("dst",dst)

cv2.waitKey(0)
cv2.destroyAllWindows()

