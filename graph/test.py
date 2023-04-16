import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv('query1.csv', header=None)
x = df[0] #state
y = df[1] #crashes
z = df[2] #population

plt.xlabel("Total Crashes", fontsize=13)
plt.ylabel("Population", fontsize=13)
plt.scatter(y, z)
plt.show()