# Apollo

<img src="https://img.shields.io/badge/contributions-welcome-orange.svg" alt="contributions-welcome-orange"/>

“Music is the literature of the heart; it commences where speech ends.” \
― Alphonse de Lamartine, Author

## Introduction

In a blooming world, having the art of music with the emerging songs style, types and genres and thousands of songs and
music pieces each with million different beats and the expansion of all music and songs datasets nowadays, splitting the
music source into stems, generating lyrics and classifying genre has become easy and able for all users.

### What is stem separation?

Stems are simply units of any given audio signal as per the musical jargon; mixing these units, or as we now know,
stems, produces complex and harmonized sounds.

Us human beings are superb in isolating these audio signals and process only the sounds we need and suppress those we
don’t need to hear. Humans' minds are really magnificent and capable of doing astonishing stuff, yet, with the
advancement of technology, it is possible to record or create sounds that we can hear later. Now, various sectors deal
with manipulation and study of the sound signals that require stems, thus in that sense, we need algorithms that can
separate audio signals effectively.

Since we can pick up little inconsistencies in the sound, the stem separation must be as clear and crisp as possible.
Hence, we would harness the capabilities of deep learning, masking and regeneration to recreate individual stems.

### What is music tagging?

Music tags is a set of descriptive keywords that carry high-level information about a music clip; those keywords could
reveal information about emotion, genre and instrumentation.

Hence, tags could be used for music recommendation and discovery.

![ConfussionMatrix](https://user-images.githubusercontent.com/30150819/124938446-94752f00-e008-11eb-8faf-d5be4a6c76b6.png)

https://user-images.githubusercontent.com/30150819/124954275-318a9480-e016-11eb-86d0-f0dc4a962a1b.mp4

## How To Run

You'll need to install [`Anaconda`](https://www.anaconda.com/products/individual),
[`Node.js`](https://nodejs.org/en/download/) and [`Heroku CLI`](https://devcenter.heroku.com/articles/heroku-cli) before
running the following script.

```bash
git clone https://github.com/ZeyadOsama/apollo.git
cd apollo
conda env create --file environment.yml
conda activate apollo
heroku local 
```

If you don't want to use `Heroku CLI`, you'll run the first script individually, then open two separate terminals and
run each of the following scripts in a terminal.

```bash
git clone https://github.com/ZeyadOsama/apollo.git
cd apollo
conda env create --file environment.yml
```

```bash
conda activate apollo
npm start
```

```bash
conda activate apollo
cd server
flask run
```

Go to [samples](/samples) for some audio files samples to try the whole project.

## Changelog

For all-time versions, please see the [CHANGELOG](CHANGELOG.rst) file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details
