# Signal processing setup
SR = 16000
FFT_HOP = 256
FFT_SIZE = 512
N_MELS = 96

# Machine learning setup
BATCH_SIZE = 1  # (size of the batch during prediction)

# Output labels
MSD_LABELS = ['rock', 'pop', 'alternative', 'indie', 'electronic', 'female vocalists', 'dance', '00s',
              'alternative rock', 'jazz', 'beautiful', 'metal', 'chillout', 'male vocalists', 'classic rock', 'soul',
              'indie rock', 'Mellow', 'electronica', '80s', 'folk', '90s', 'chill', 'instrumental', 'punk', 'oldies',
              'blues', 'hard rock', 'ambient', 'acoustic', 'experimental', 'female vocalist', 'guitar', 'Hip-Hop',
              '70s', 'party', 'country', 'easy listening', 'sexy', 'catchy', 'funk', 'electro', 'heavy metal',
              'Progressive rock', '60s', 'r n b', 'indie pop', 'sad', 'House', 'happy']
