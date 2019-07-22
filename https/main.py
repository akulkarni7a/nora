import flask
import spacy

app = flask.Flask(__name__)

nlp = spacy.load("en_core_web_sm")

def hello_get(request):
    text = (request)
    doc = nlp(text)

    # Analyze syntax
    print("Noun phrases:", [chunk.text for chunk in doc.noun_chunks])
    print("Verbs:", [token.lemma_ for token in doc if token.pos_ == "VERB"])
    
    return 'Hello World!'