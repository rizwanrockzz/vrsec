# step 1:Import all necessary libraries

# Library to process large, multi-dimensional arrays and matrices
import numpy as np

# Library to plot graphs
import matplotlib.pyplot as plt

# Basic maths library
import math

# step 2: Read image using matplotlib's plt.imread() functionality which takes file path as an input
image = plt.imread("C:/Users/Lakshmi vara prasad/Desktop/CVIP/1.Lena_Color.tif")

print()
print(image.shape)
print()

# Get image's dimensions
width, height, channels = image.shape

# Create a 2-d array i.e. an empty image(all zeros) of size width X height, i.e. only 2-d
gray_image = np.uint8(np.zeros((width, height)))

# step 3: convert BGR image into Gray image using prescribed values and fill values accordingly in the empty image
for i in range(width):
    for j in range(height):
        gray_image[i, j] = (0.0722*image[i, j, 0] + 0.7152*image[i, j, 1] + 0.2126*image[i, j, 2])

print()
print(gray_image.shape)
print()


# Plot both the images
fig=plt.figure(figsize=(10, 10))
columns = 2
rows = 1

fig.add_subplot(rows, columns, 1)
plt.imshow(image)
plt.axis("off")
plt.title("Original Image")

fig.add_subplot(rows, columns, 2)
plt.imshow(gray_image, "gray")
plt.axis("off")
plt.title("Gray Image")

plt.tight_layout()
plt.show()


#----------------------------------------------------------
# M-1 : Using threshold value(t = 128)

# initialize an empty image
binary_image = np.uint8(np.zeros((width, height)))

# fill values according the value of the pixel
for i in range(width):
  for j in range(height):
    if(gray_image[i, j] >= 128):
      binary_image[i, j] = 255
    else:
      binary_image[i, j] = 0

# M-2 : Using Average as threshold

# initialize an empty image
binary_image2 = np.uint8(np.zeros((width, height)))

# initialize and fill variable "total" which should contain sum of values of all pixels
total = 0
for i in range(width):
  for j in range(height):
    total += gray_image[i, j]

# Get threshold value
threshold = total/(width*height)

# fill values in the image according to the value of the pixel
for i in range(width):
  for j in range(height):
    if(gray_image[i, j] >= threshold):
      binary_image2[i, j] = 255
    else:
      binary_image2[i, j] = 0


# plot the graphs/images
fig=plt.figure(figsize=(10, 10))
columns = 2
rows = 2

fig.add_subplot(rows, columns, 1)
plt.imshow(image)
plt.axis("off")
plt.title("Original Image")

fig.add_subplot(rows, columns, 2)
plt.imshow(gray_image, "gray")
plt.axis("off")
plt.title("Gray Image")

fig.add_subplot(rows, columns, 3)
plt.imshow(binary_image, "gray")
plt.axis("off")
plt.title("Binary Image using k as threshold")

fig.add_subplot(rows, columns, 4)
plt.imshow(binary_image2, "gray")
plt.axis("off")
plt.title("Binary Image using Average as threshold")

plt.tight_layout()
plt.show()