arr = []

for i in range(101):
  arr.append(i)

def bin_search(search_num):
  left = 0
  right = len(arr)
  index = (right + left) // 2

  while True:
    mid = arr[index]
    
    if search_num > mid:
      left = index
      index = (right + left) // 2
      continue
    
    if search_num < mid:
      right = index
      index = (right + left) // 2
      continue
    
    if mid == search_num:
      return mid
    

num = bin_search(3)

print(f'num = {num}')
