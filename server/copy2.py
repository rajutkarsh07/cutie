import pickle as pkl
from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

CORS_ORIGIN_ALLOW_ALL = True

# Load the pre-trained model
# model = pkl.load(open("model.pkl", "rb"))

# Define a route for the API
@app.route("/predict", methods=["POST"])
def predict():
    # Get the data from the request
    data = request.get_json()
    def recommend(movie):
        movie_index=movies_dict[movies_dict['title']==movie].index[0]
        distances=similarity[movie_index]
        movie_list=sorted(list(enumerate(distances)),reverse=True,key=lambda x:x[1])[1:7]
        recommended_movies=[]
            # recommended_movies_posters=[]
        for i in movie_list:
            movies_id=movies_dict.iloc[i[0]].movie_id
            # fetch poster from API
            # recommended_movies_posters.append(fetch_poster(movies_id))
            recommended_movies.append(movies_dict.iloc[i[0]].title)
        return recommended_movies

    # Make a prediction using the model
    movies_dict=pkl.load(open("movies_dict.pkl","rb"))
    movies_dict=pd.DataFrame(movies_dict)
    similarity=pkl.load(open("similarity.pkl","rb"))
    print(data['movie'])
    prediction = recommend(data['movie'])

    # Return the prediction as a JSON response
    return jsonify({"prediction": prediction})

if __name__ == "__main__":
    app.run(port=5000)



    


