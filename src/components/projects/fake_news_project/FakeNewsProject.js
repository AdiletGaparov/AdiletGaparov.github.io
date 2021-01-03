import React from 'react';
import Container from '@material-ui/core/Container';
import {makeStyles} from "@material-ui/core/styles";
import ProjectNavbar from "../ProjectNavbar";
import Carousel from "../../Carousel";
import MyTabs from "../../MyTabs";
// images
import evaluationPlot from '../../../assets/img/projects/fake_news/project-fake-news-evaluation.png';
import unigramsPlot from '../../../assets/img/projects/fake_news/project-fake-news-unigrams.png';
import bigramsPlot from '../../../assets/img/projects/fake_news/project-fake-news-bigrams.png';
import postagsPlot from '../../../assets/img/projects/fake_news/project-fake-news-pos-tags.png';
import tokensTable from '../../../assets/img/projects/fake_news/project-fake-news-table.png';

const summary = [
    {
        label: '1/4. By plotting average TF-IDF values for the top 50 words by each class (fake/real), in the dataset there is slight difference between the words used, although the difference is not that clear for unigrams.',
        imgPath: unigramsPlot
    },
    {
        label: '2/4. This difference becomes clearer for bigrams.',
        imgPath: bigramsPlot
    },
    {
        label: '3/4. There is also difference between fake and real news in terms of what POS-tags are used. Moreover, fake news seem to contain more SYM (symbols like $, %, §, ©, 😝), X (other like sfpksdpsxmsa), INTJ (interjection like psst, ouch, bravo, hello).',
        imgPath: postagsPlot
    },
    {
        label: '4/4. Real news tend to have more tokens and characters.',
        imgPath: tokensTable
    }
]
const tabs = [
    {
        label: '1. Business/problem understanding',
        id: 1,
    },
    {
        label: '2. Data understanding',
        id: 2,
    },
    {
        label: '3. Data preparation',
        id: 3
    },
    {
        label: '4. Modelling',
        id: 4
    },
    {
        label: '5. Evaluation',
        id: 5
    },
    {
        label: '6. Deployment',
        id: 6
    }
]
const styles = (theme) => ({
    root: {
        fontFamily: 'IBM Plex Sans, monospace',
        fontWeight: 500
    },
    image: {
        maxWidth: '100%',
        maxHeight: '400px',
        margin: '10px'
    },
    code: {
        backgroundColor: '#e1e1e1',
        maxHeight: '80vh',
        maxWidth: '100%',
        overflow: 'auto',
        padding: '5px 10px',
        fontSize: '80%',
        whiteSpace: 'pre-wrap',
        lineHeight: 1
    }
})

const useStyles = makeStyles(styles);

const FakeNewsDetector = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(1);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Container className={classes.root}>
            <ProjectNavbar handleReturn={props.handleReturn}/>
            <h6>Individual project for Natural Language Processing (NLP) class at IE</h6>
            <p>In this project, I am going to use CRoss-Industry Standard Process for Data Mining (<a href='https://en.wikipedia.org/wiki/Cross-industry_standard_process_for_data_mining' target='_blank' rel="noreferrer">CRISP-DM methodology</a>).</p>
            <MyTabs tabList={tabs} handleChange={handleChange} value={value}/>
            {value===1 &&
                <div>
                    <p>
                        Fake News Detection is quite popular problem nowadays.
                        There is no doubt that it is very complex problem, because we see that even major platforms can't efficiently stop the spread of fake news, hiring many people, deploying sophisticated policies and models.
                    </p>
                    <p>
                        As an example of a complex approach, few years ago Twitter acquired startup Fabula AI, that has developed a technology to detect the fake information using graph-based approach, analyzing the differences in the way fake and real information spread across the network.
                        Another (simpler) approach would be to analyze the difference in the choice of words used in both fake and real news. And this is what I did.
                    </p>
                </div>
            }
            {value===2 &&
                <div>
                    <p>
                        The dataset contains 3999 news articles (title + text) collected from the web with labels either fake or real (around 50-50 split).
                    </p>
                    <p><b>I had several hypotheses on how fake news might be different from real news:</b></p>
                    <ol>
                        <li>Talking about the same topic (i.e. politics), in fake news an author might use different words and n-grams (less formal).</li>
                        <li>Fake news might be mostly about politics and crime, hence completely different words and n-grams are used.</li>
                        <li>In fake news an author might use different POS tags, i.e. more adjectives and adverbs, like incredibly or breaking.</li>
                        <li>Real news might be longer, because they tend to include supporting facts and references.</li>
                    </ol>
                    <p><b>Summary of exploratory data analysis (EDA) on the dataset:</b></p>
                    <Carousel gridList={summary}/>
                </div>
            }
            {value===3 &&
                <div>
                    <p>I built two custom tokenizers using spaCy library and their medium-size pre-trained statistical model for English, because it was trained on web-content (blogs, news, comments):</p>
                    <ul>
                        <li>To get lemmas of tokens, which are not corresponding to POS tags SPACE, PUNCT (punctuation: .,:?), X (other: xasdasdg), NUM (numeral: 1, 2017, one, IV), SYM (symbol: $,§,©,,−,÷,=,😝), DET (determiner: a,an,the), PART (particle: 's,not).</li>
                        <li>To get only POS tags</li>
                    </ul>
                    <p>Since one of the hypotheses is that fake and real news use different words, it is important to remove stopwords to better see the difference.</p>
                    <pre className={classes.code}><code>{dataPrepSnippet}</code></pre>
                </div>
            }
            {value===4 &&
                <div>
                    <p>The approach for the modeling was the following:</p>
                    <ol>
                        <li>Start with creating a classification model using only TF-IDF values of unigrams.</li>
                        <li>Create a model using bigrams.</li>
                        <li>Combine unigrams and bigrams to see if the model improves.</li>
                        <li>Build a model using only POS-tags.</li>
                        <li>Combine POS-tags and the unigrams/bigrams to see if the model improves.</li>
                    </ol>
                    <p>The above procedure was repeated for each of the following Machine Learning algorithms from <a href='https://scikit-learn.org/stable/' target='_blank' rel='noreferrer'>scikit-learn</a> library:</p>
                    <ul>
                        <li><a href='https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.SGDClassifier.html' target='_blank' rel='noreferrer'>Linear classifiers with SGD training.</a></li>
                        <li><a href='https://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.MultinomialNB.html#sklearn.naive_bayes.MultinomialNB' target='_blank' rel='noreferrer'>Naive Bayes classifier for multinomial models.</a></li>
                        <li><a href='https://scikit-learn.org/stable/modules/generated/sklearn.svm.LinearSVC.html' target='_blank' rel='noreferrer'>Linear Support Vector Classification.</a></li>
                    </ul>
                    <p>Grid Search was used to find the optimal hyperparameters for each model.</p>
                </div>
            }
            {value===5 &&
                <div>
                    <p>For every model:</p>
                    <ul>
                        <li>Unigrams + Bigrams are better than just Unigrams.</li>
                        <li>Unigrams + Bigrams + POS-tags are better than Unigrams + Bigrams.</li>
                    </ul>
                    <p>
                        After optimizing all models, I combined all 3 of them using <a href='https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.VotingClassifier.html' target='_blank' rel='noreferrer'>Voting Classifier</a>.
                        Voting Classifier gave slightly better results than others.
                    </p>
                    <div style={{textAlign: 'center'}}>
                        <img src={evaluationPlot} alt={'models accuracy'} className={classes.image}/>
                    </div>
                </div>
            }
            {value===6 &&
                <div>
                    <p>The final model is shown below.</p>
                    <pre className={classes.code}><code>{modelSnippet}</code></pre>
                </div>
            }
        </Container>
    )
}

const dataPrepSnippet = `
import spacy
from nltk.corpus import stopwords

def spacy_tokenizer(data, n_process=4, pos=True, stop_words=True):
    """Tokenizes the data using spaCy. If pos=True, returns POS-tags too.

    Args:
        data (List): List of documents
        n_process (int): number of processes to run .pipe method of spaCy object
        pos (bool): if True, returns POS-tags too
        stop_words (bool): if True, remove stop words using NLTK Stopwords list

    Returns:
        List: List of lemmatized tokens
        List: List of POS-tags if pos=True
    """

    if stop_words == True:
        nltk_stopwords = stopwords.words("English")

    if spacy.__version__ < "2.2.2":
        data_gen = nlp.pipe(data, n_threads=n_process)
    else:
        data_gen = nlp.pipe(data, n_process=n_process)

    data_lemma = []

    if pos == True:
        data_pos = []

    for token_objects in data_gen:

        lemma_tokens = [
            token.lemma_.lower().strip()
            for token in token_objects
            if not wrong_token(token)
        ]

        if stop_words == True:
            lemma_tokens = [
                token for token in lemma_tokens if token not in nltk_stopwords
            ]

        data_lemma.append(lemma_tokens)

        if pos == True:
            pos_tokens = [token.pos_ for token in token_objects]
            data_pos.append(pos_tokens)

    if pos:
        return data_lemma, data_pos
    else:
        return data_lemma

def wrong_token(token):
    """Filters token based on POS-tag"""

    wrong_pos = token.pos_ in [
        "SPACE",
        "PUNCT",
        "X",
        "NUM",
        "SYM",
        "DET",
        "PART",
        "INTJ",
    ]
    personal_pronoun = token.lemma_ == "-PRON-"

    return personal_pronoun or wrong_pos
`
const modelSnippet = `
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.svm import LinearSVC
from sklearn.linear_model import SGDClassifier
from sklearn.ensemble import VotingClassifier

class FakeNewsDetection:
    """Final Machine Learning model.

    Args:
        max_features_lemma (int): max number of features in matrix for lemmas
        max_features_pos (int): max number of features in matrix for POS-tags
    """

    def __init__(self, max_features_lemma=80000, max_features_pos=20000):
        self.tfidf_lemma = TfidfVectorizer(
            ngram_range=(1, 2),
            tokenizer=lambda doc: doc,
            preprocessor=lambda doc: doc,
            max_features=max_features_lemma,
        )

        self.tfidf_pos = TfidfVectorizer(
            ngram_range=(4, 4),
            tokenizer=lambda doc: doc,
            preprocessor=lambda doc: doc,
            max_features=max_features_pos,
        )

    def fit(self, X_lemma, X_pos, labels=None):
        """Method to fit the model.

        Args:
            X_lemma (pandas DataFrame/numpy matrix): train set of lemmas
            X_pos (pandas DataFrame/numpy matrix): train set of POS-tags
            labels (array): list of target labels
        """
        X_lemma = self.tfidf_lemma.fit_transform(X_lemma)
        X_lemma = pd.DataFrame(X_lemma.A, columns=self.tfidf_lemma.get_feature_names())

        X_pos = self.tfidf_pos.fit_transform(X_pos)
        X_pos = pd.DataFrame(X_pos.A, columns=self.tfidf_pos.get_feature_names())

        X_prep = pd.concat([X_lemma, X_pos], axis=1)

        self.model = VotingClassifier(
            estimators=[
                ("NB", MultinomialNB(alpha=0.1)),
                ("SVM", LinearSVC(C=1, random_state=289, loss="hinge")),
                ("SGD", SGDClassifier(random_state=289, loss="hinge")),
            ],
            voting="hard",
            n_jobs=-1,
        )

        self.model.fit(X_prep, labels)

    def predict(self, X_lemma, X_pos):
        """Method to create predictions from preprocessed data.

        Args:
            X_lemma (pandas DataFrame/numpy matrix): test set of lemmas
            X_pos (pandas DataFrame/numpy matrix): test set of POS-tags

        Returns:
            List: class predictions in text (FAKE/REAL) for test set
        """
        X_lemma = self.tfidf_lemma.transform(X_lemma)
        X_lemma = pd.DataFrame(X_lemma.A, columns=self.tfidf_lemma.get_feature_names())

        X_pos = self.tfidf_pos.transform(X_pos)
        X_pos = pd.DataFrame(X_pos.A, columns=self.tfidf_pos.get_feature_names())

        X_prep = pd.concat([X_lemma, X_pos], axis=1)

        predictions = self.model.predict(X_prep)
        predictions = pd.Series(predictions)
        predictions = predictions.replace([0, 1], ["FAKE", "REAL"]).to_list()

        return predictions

    def predict_from_raw(self, news):
        """Method to create predictions from raw data.

        Args:
            news (List): list of news in text format (string)

        Returns:
            List: class predictions in text (FAKE/REAL) for each news in the list
        """
        news_lemma, news_pos = spacy_tokenizer(news)

        news_lemma = self.tfidf_lemma.transform(news_lemma)
        news_lemma = pd.DataFrame(
            news_lemma.A, columns=self.tfidf_lemma.get_feature_names()
        )

        news_pos = self.tfidf_pos.transform(news_pos)
        news_pos = pd.DataFrame(news_pos.A, columns=self.tfidf_pos.get_feature_names())

        news_prep = pd.concat([news_lemma, news_pos], axis=1)

        predictions = self.model.predict(news_prep)
        predictions = pd.Series(predictions)
        predictions = predictions.replace([0, 1], ["FAKE", "REAL"]).to_list()

        return predictions
`

export default FakeNewsDetector;