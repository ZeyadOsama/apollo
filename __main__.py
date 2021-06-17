from builtins import input

from apollo.engine.models.GernreClassificaiton.tagger import top_tags
from apollo.engine.models.GernreClassificaiton.extractor import extractor
import numpy as np
import matplotlib.pyplot as plt

file_name = "Rap_God.mp3"
model = "MSD_musicnn"
topN = 5
input_length = 10
input_overlap = False
print_tags = True
save_tags = True

# top_tags = top_tags(file_name, model, topN, input_length, input_overlap, print_tags, save_tags)

taggram, tags, features = extractor(file_name, model)
in_length = 3  # seconds  by default, the model takes inputs of 3 seconds with no overlap

plt.rcParams["figure.figsize"] = (10, 8)  # set size of the figures
fontsize = 12  # set figures font size

fig, ax = plt.subplots()

# title
ax.title.set_text('Taggram')
ax.title.set_fontsize(fontsize)

# x-axis title
ax.set_xlabel('(seconds)', fontsize=fontsize)

# y-axis
y_pos = np.arange(len(tags))
ax.set_yticks(y_pos)
ax.set_yticklabels(tags, fontsize=fontsize - 1)

# x-axis
x_pos = np.arange(taggram.shape[0])
x_label = np.arange(in_length / 2, in_length * taggram.shape[0], 3)
ax.set_xticks(x_pos)
ax.set_xticklabels(x_label, fontsize=fontsize)

# depict taggram
ax.imshow(taggram.T, interpolation=None, aspect="auto")
plt.savefig("./Taggram")
# plt.show()

tags_likelihood_mean = np.mean(taggram, axis=0)  # averaging the Taggram through time

fig, ax = plt.subplots()

# title
ax.title.set_text('Tags likelihood (mean of the taggram)')
ax.title.set_fontsize(fontsize)

# y-axis title
ax.set_ylabel('(likelihood)', fontsize=fontsize)

# y-axis
ax.set_ylim((0, 1))
ax.tick_params(axis="y", labelsize=fontsize)

# x-axis
ax.tick_params(axis="x", labelsize=fontsize - 1)
pos = np.arange(len(tags))
ax.set_xticks(pos)
ax.set_xticklabels(tags, rotation=90)

# depict song-level tags likelihood
ax.bar(pos, tags_likelihood_mean)
plt.savefig("./Tags_Likelihood")

# Pie Chart
tags_likelihood_mean = np.mean(taggram, axis=0)  # averaging the Taggram through time
indices = np.argsort(-tags_likelihood_mean)[:topN]
tags_likelihood_mean = tags_likelihood_mean[indices]
tags = list(np.array(tags)[indices.astype(int)])

labels = tags + ["others"]
sizes = np.append(tags_likelihood_mean, 1.0 - sum(tags_likelihood_mean))
explode = [0] * len(labels)
explode[0] = 0.2

fig1, ax1 = plt.subplots()
ax1.pie(sizes, explode=explode, labels=labels, autopct='%1.1f%%',
        shadow=True, startangle=90)

ax1.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.
plt.savefig("./PieChart")


