function change() {

    const child1 = document.getElementById('img-div');
    const child2 = document.getElementById('to-shere');
    const parent2 = document.getElementById('shape-div');
    

    if (window.matchMedia("(max-width: 576px)").matches && child1 === null === true && child2 === null === true) {

        const oldChild1 = document.getElementById('profile');
        const oldChild2 = document.getElementById('name');

        oldChild1.style.display='none';
        oldChild2.style.display='none';

        const parent = document.getElementById('content');

        const facebook = document.createElement('img');
        facebook.id = 'facebook';

        const twitter = document.createElement('img');
        twitter.id = 'twitter';

        const pinterest = document.createElement('img');
        pinterest.id = 'pin';

        const toShere = document.createElement('div');
        toShere.id = 'to-shere';
        toShere.textContent = 'SHARE';

        const imgDiv = document.createElement('div');
        imgDiv.id = 'img-div';

        parent.appendChild(toShere);
        parent.appendChild(imgDiv);

        const child1 = document.getElementById('img-div');

        child1.appendChild(facebook);
        child1.appendChild(twitter);
        child1.appendChild(pinterest);

        parent.style.backgroundColor = "hsl(214, 17%, 51%)";
        parent.style.margin="0"
        parent.style.padding="3% 10% 3% 10%"
        parent.style.borderRadius="0 0 1rem 1rem"
    }

    else if (child1 !== null === true && child2 !== null === true) {

        const parent = document.getElementById('content');
        const oldChild1 = document.getElementById('profile');
        const oldChild2 = document.getElementById('name');

        const child1 = document.getElementById('img-div');
        const child2 = document.getElementById('to-shere');

        oldChild2.style.display='block';
        oldChild1.style.display='block';

        parent.removeChild(child1);
        parent.removeChild(child2);

        parent.style.backgroundColor = "white";
        parent.style.margin="3% 10% 3% 10%"
        parent.style.padding="0"
    }

    else if (window.matchMedia("(min-width: 576px)").matches && parent2 === null === true){
        const shapeDiv = document.createElement('div');
        shapeDiv.id = 'shape-div';
        const parent1 = document.getElementById('bottom-div');
        parent1.appendChild(shapeDiv);

        const parent2 = document.getElementById('shape-div');

        const facebook1 = document.createElement('img');
        facebook1.id = 'facebook1';

        const twitter1 = document.createElement('img');
        twitter1.id = 'twitter1';

        const pinterest1 = document.createElement('img');
        pinterest1.id = 'pin1';

        const toShere1 = document.createElement('div');
        toShere1.id = 'to-shere1';
        toShere1.textContent = 'SHARE';

        const imgDiv1 = document.createElement('div');
        imgDiv1.id = 'img-div1';

        parent2.appendChild(imgDiv1);
        parent2.appendChild(toShere1);

        document.getElementById('img-div1').appendChild(facebook1);
        document.getElementById('img-div1').appendChild(twitter1);
        document.getElementById('img-div1').appendChild(pinterest1);
    }


    else if (window.matchMedia("(min-width: 576px)").matches){
        document.getElementById('bottom-div').removeChild(document.getElementById('shape-div'));
    }
}



