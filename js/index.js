

fetch("e.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson.Sheet1[0]);
        console.log(myJson.Sheet1[1]);
        console.log(myJson.Sheet1[2]);
    });


function show() {

    var search = document.getElementById("search").value

    if (search === "blockchain"){

        document.getElementById("show").innerHTML = `<br><figure class="snip0051">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" alt="sample1"/>
        <div class="icons">
            <a href="#"><i class="ion-ios-home-outline"></i></a>
            <a href="#"><i class="ion-ios-email-outline"></i></a>
            <a href="#"><i class="ion-ios-telephone-outline"></i></a>
        </div>
        <figcaption>
            <h2>Judy <span>Havelock</span></h2>
            <p>This specialist has 3 years‘ experience in blockchain startups</p>
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
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" alt="sample1"/>
        <div class="icons">
            <a href="#"><i class="ion-ios-home-outline"></i></a>
            <a href="#"><i class="ion-ios-email-outline"></i></a>
            <a href="#"><i class="ion-ios-telephone-outline"></i></a>
        </div>
        <figcaption>
            <h2>Judy <span>Havelock</span></h2>
            <p>This specialist has 3 years‘ experience in blockchain startups</p>
        </figcaption>
    </figure>
    <figure class="snip0051 hover">
        <img src="elon.png" alt="sample4"/>
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

}
