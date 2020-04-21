![Image description](https://i1.faceprep.in/ProGrad/face-logo-resized.png)

# ProGrad Lab | Superwars Stage 1

## Introduction

Dustin and Lucus are best friends. They spend their weekends watching superhero series and playing superhero games. One Friday at school Mr.Hooper, their computer science faculty taught them HTML, CSS, and JavaScript. Dustin & Lucus realised they could build super cool super hero stuff using their knowledge. 

The subsequent weekend, they decided to do it. Lucus and Dustin are now all set to build something super cool.

Lucus always loves protagonists like most of us. But Dustin is quite crazy, he likes antagonists. So they decided to collect a bunch of their favorite Super Heroes and Super Villains names along with their pictures. Did they tell you about the game that they are gonna build? 

Okay, let us explain. They are going to facilitate the ultimate war between Super Heroes and Super Villains. As they are new to these technologies, they need a **ProGrad** to help them build this game.

## Learning Goals

After this lesson, you will be able to:

- Create a static Angular application with Angular CLI.
- Build an Angular application with one component.

## Requirements

- Fork this repo.
- Clone this repo.

## Submission

Upon completion, run the following commands:

```bash
$ git add .
$ git commit -m "done"
$ git push origin master
```

Navigate to your repo and create a pull request from your master branch to the original repository's master branch.

In the pull request name, add your Prograd id, name, and last name separated by a dash "-".

## Deliverables

You need to generate the starter code and fill it with the necessary code to satisfy the requirements described below.

## Starter Code

To generate the starter code, follow the steps given below

- To create a new application,
    - Open your ubuntu or cmd terminal and execute the following command
      - ```ng new app-name```
      - for example, ng new super-wars
    - To create a new component, execute the command 
      - ``` ng generate component component-name```
      - example, ng generate component contacts
      
## How to run

- To run the project go to your ubuntu terminal or VScode editor
    - open the ubuntu or cmd terminal or inside the vscode editor
    - run the command following command
    - ```ng serve --open or ng serve -o```

### Progression : Build the arena & have the players ready

1. Go to src/app.component.html document.
2. Inside the app.component.css, using `CSS Grid`, create 3 columns one each for Heroes, score and Villains in same order. Try to make it responsive and find the right size for each grid.
3. Add players to the left and right grids. Use the middle grid to showcase the scores.
4. Style the general elements in `src/style.css`.
5. Add component specific to styles to app.component.css
6. Use the same images given in sprint-1 project builder - superwars css.

### Conditions

Your output should adhere to the following conditions.
* Heroes should be on your left grid and Villains on the right grid.
* Heroes should be justified to the right and Villains to the left.
* Each player should have an image, name and strength (Number). The images of the super heroes are provided in the "src/assets" folder.
* Name and strength should be center aligned.
* Make the players equally spaced apart.

### Expected Output
Your final output should look like this

![Superwar](https://github.com/FACEPrep-ProGrad/project-11-superwars-css/raw/master/doc/superwars-css.png)


Happy Coding ProGrad ❤️
