

// fetch("e.json")
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(myJson) {
//         console.log(myJson.Sheet1[0]);
//         console.log(myJson.Sheet1[1]);
//         console.log(myJson.Sheet1[2]);
//     });


function show() {

    var search = document.getElementById("search").value

    if (search === "blockchain" || search === "block chain"){

        document.getElementById("show").innerHTML = `<br><figure class="snip0051">
        <img src="https://user-images.githubusercontent.com/21117852/42130058-e6256ba4-7d09-11e8-92ec-38283bcfb19f.png" alt="sample1"/>
        <div class="icons">
            <a onclick="push()"><i class="ion-ios-home-outline"></i></a>
            <a href="#"><i class="ion-ios-email-outline"></i></a>
            <a href="#"><i class="ion-ios-telephone-outline"></i></a>
        </div>
        <figcaption>
            <h2>Vitalik  <span>Buterin</span></h2>
            <p>Created the most successful blockchain companies in the world</p>
        </figcaption>
    </figure>
    <figure class="snip0051 hover">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample4.jpg" alt="sample4"/>
        <div class="icons">
            <a href="#"><i class="ion-ios-home-outline"></i></a>
            <a href="#"><i class="ion-ios-email-outline"></i></a>
            <a href="#"><i class="ion-ios-telephone-outline"></i></a>
        </div>
        <figcaption>
            <h2>Lisl <span>Baum</span></h2>
            <p>Has started multiple success blockchain companies</p>
        </figcaption>
    </figure>`
    }



    if (search === "ai expert"){
        document.getElementById("show").innerHTML = `<br><figure class="snip0051">
        <img src="https://user-images.githubusercontent.com/21117852/42130071-50fdffc2-7d0a-11e8-9bb8-ae56191c579e.png" alt="sample1"/>
        <div class="icons">
            <a href="#"><i class="ion-ios-home-outline"></i></a>
            <a href="#"><i class="ion-ios-email-outline"></i></a>
            <a href="#"><i class="ion-ios-telephone-outline"></i></a>
        </div>
        <figcaption>
            <h2>Bill <span>Gates</span></h2>
            <p>Loves AI more than anything else</p>
        </figcaption>
    </figure>
    <figure class="snip0051 hover">
        <img src="https://user-images.githubusercontent.com/21117852/42130000-1ef21f38-7d08-11e8-9eae-423c533d147c.png" alt="sample10"/>
        <div class="icons">
            <a href="#"><i class="ion-ios-home-outline"></i></a>
            <a href="#"><i class="ion-ios-email-outline"></i></a>
            <a href="#"><i class="ion-ios-telephone-outline"></i></a>
        </div>
        <figcaption>
            <h2>Elon <span>Musk</span></h2>
            <p>Is known as the AI master</p>
        </figcaption>
    </figure>`
    }

}




function send() {

}
