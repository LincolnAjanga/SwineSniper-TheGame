
# coding: utf-8

# In[1]:


import time
import webbrowser

max_break = 3
break_count = 0

while(break_count < max_break):
    time.sleep(3600)
    webbrowser.open('file:///home/lincoln/Desktop/Swine%20Sniper/index.html')
    break_count = break_count +1

