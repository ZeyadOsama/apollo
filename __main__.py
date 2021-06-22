from builtins import input

from apollo.engine.models.GenreClassification.tagger import top_tags
from apollo.engine.models.GenreClassification.extractor import extractor
import numpy as np
import matplotlib.pyplot as plt

file_name = "Anthrax - Bring Tha Noize.mp3"
output_folder = "website/backend/plots"


# top_tags = top_tags(file_name, model, topN, input_length, input_overlap, print_tags, save_tags)

taggram, tags, features = extractor(file_name, output_folder)

#
