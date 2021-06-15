from builtins import input

from apollo.engine.models.GernreClassificaiton.tagger import top_tags

file_name = "Rap_God.mp3"
model = "MSD_musicnn"
topN = 3
input_length = 3
input_overlap = False
print_tags = True
save_tags = True

top_tags = top_tags(file_name, model, topN, input_length, input_overlap, print_tags, save_tags)
