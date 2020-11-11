// ------------------ CARD - GUIDE SWITCH --------------------

//Nutrient card
let NutrientCard = document.getElementById('nutrientCard');
let CardButton = document.getElementById('btnNutrientCard');
document.getElementById('btnNutrientCard').addEventListener('click', function(){
    NutrientCard.classList.remove('hide'),
    NutrientGuide.classList.remove('in-view'),
    GuideButton.classList.remove('selected');
});

document.getElementById('btnNutrientCard').addEventListener('click', function(){
    NutrientGuide.classList.add('hide')
    NutrientCard.classList.add('in-view'),
    CardButton.classList.add('selected');
});

//Nutrient guide
let NutrientGuide = document.getElementById('nutrientGuide');
let GuideButton = document.getElementById('btnNutrientGuide');
document.getElementById('btnNutrientGuide').addEventListener('click', function(){
    NutrientGuide.classList.remove('hide'),
    NutrientCard.classList.remove('in-view'),
    CardButton.classList.remove('selected');
});

document.getElementById('btnNutrientGuide').addEventListener('click', function(){
    NutrientCard.classList.add('hide'),
    NutrientGuide.classList.add('in-view'),
    GuideButton.classList.add('selected');
});

// --------- SWITCHING BETWEEN "PAGES" ------------

//Home
let Home = document.getElementById('Home');
document.getElementById('btnHome').addEventListener('click', function(){
    Recipes.classList.remove('in-view'), 
    Diary.classList.remove('in-view'), 
    ShoppingList.classList.remove('in-view'), 
    Profile.classList.remove('in-view'),
    RecipeFilters.classList.remove('in-view'),
    RecipeExample.classList.remove('in-view');
});

document.getElementById('btnHome').addEventListener('click', function(){
    Home.classList.add('in-view')
});

//Recipes
let Recipes = document.getElementById('Recipes');
document.getElementById('btnRecipes').addEventListener('click', function(){
    Home.classList.remove('in-view'), 
    Diary.classList.remove('in-view'), 
    ShoppingList.classList.remove('in-view'), 
    Profile.classList.remove('in-view'),
    RecipeFilters.classList.remove('in-view'),
    RecipeExample.classList.remove('in-view');
});

document.getElementById('btnRecipes').addEventListener('click', function(){
    Recipes.classList.add('in-view')
});

//Diary
let Diary = document.getElementById('Diary');
document.getElementById('btnDiary').addEventListener('click', function(){
    Home.classList.remove('in-view'), 
    Recipes.classList.remove('in-view'), 
    ShoppingList.classList.remove('in-view'), 
    Profile.classList.remove('in-view'),
    RecipeFilters.classList.remove('in-view'),
    RecipeExample.classList.remove('in-view');
});

document.getElementById('btnDiary').addEventListener('click', function(){
    Diary.classList.add('in-view')
});

//Shopping list
let ShoppingList = document.getElementById('ShoppingList');
document.getElementById('btnShoppingList').addEventListener('click', function(){
    Home.classList.remove('in-view'), 
    Recipes.classList.remove('in-view'), 
    Diary.classList.remove('in-view'), 
    Profile.classList.remove('in-view'),
    RecipeFilters.classList.remove('in-view'),
    RecipeExample.classList.remove('in-view');
});

document.getElementById('btnShoppingList').addEventListener('click', function(){
    ShoppingList.classList.add('in-view')
});

//Profile
let Profile = document.getElementById('Profile');
document.getElementById('btnProfile').addEventListener('click', function(){
    Home.classList.remove('in-view'), 
    Recipes.classList.remove('in-view'), 
    Diary.classList.remove('in-view'), 
    ShoppingList.classList.remove('in-view'),
    RecipeFilters.classList.remove('in-view'),
    RecipeExample.classList.remove('in-view');
});

document.getElementById('btnProfile').addEventListener('click', function(){
    Profile.classList.add('in-view')
});

// ------------- INFORMATION TAB --------------------
let InfoBox = document.getElementById('Info');

document.getElementById('btnInfo').addEventListener('click', function(){
    InfoBox.classList.add('in-view');
});

document.getElementById('btnCloseInfo').addEventListener('click', function(){
    InfoBox.classList.remove('in-view');
});

// ---------------- REVEAL/CLOSE FILTERS -------------
let RecipeFilters = document.getElementById('jsRecipeFilters');

document.getElementById('Recipes').addEventListener('click', function(){
    Recipes.classList.remove('in-view');
});

document.getElementById('jsFilters').addEventListener('click', function(){
    RecipeFilters.classList.add('in-view');
});

document.getElementById('closeFilters').addEventListener('click', function() {
    RecipeFilters.classList.remove('in-view'),
    Recipes.classList.add('in-view');
});

// --------------- CHANGE NAV BUTTON COLORS --------------

let HomeSelected = document.getElementById('navBtn1');
let RecipesSelected = document.getElementById('navBtn2');
let DiarySelected = document.getElementById('navBtnCircle');
let ShoppingListSelected = document.getElementById('navBtn3');
let ProfileSelected = document.getElementById('navBtn4');

//Home
document.getElementById('navBtn1').addEventListener('click', function() {
    RecipesSelected.classList.remove('selected'),
    DiarySelected.classList.remove('selected'),
    ShoppingListSelected.classList.remove('selected'),
    ProfileSelected.classList.remove('selected');
});


document.getElementById('navBtn1').addEventListener('click', function() {
    HomeSelected.classList.add('selected');
});

//Recipes
document.getElementById('navBtn2').addEventListener('click', function() {
    HomeSelected.classList.remove('selected'),
    ShoppingListSelected.classList.remove('selected'),
    ProfileSelected.classList.remove('selected');
});


document.getElementById('navBtn2').addEventListener('click', function() {
    RecipesSelected.classList.add('selected');
});

//Diary
document.getElementById('navBtnCircle').addEventListener('click', function() {
    HomeSelected.classList.remove('selected'),
    RecipesSelected.classList.remove('selected'),
    ShoppingListSelected.classList.remove('selected'),
    ProfileSelected.classList.remove('selected');
});

//Shopping List
document.getElementById('navBtn3').addEventListener('click', function() {
    HomeSelected.classList.remove('selected'),
    RecipesSelected.classList.remove('selected'),
    ProfileSelected.classList.remove('selected');
});


document.getElementById('navBtn3').addEventListener('click', function() {
    ShoppingListSelected.classList.add('selected');
});

//Profile 
document.getElementById('navBtn4').addEventListener('click', function() {
    HomeSelected.classList.remove('selected'),
    RecipesSelected.classList.remove('selected'),
    ShoppingListSelected.classList.remove('selected');
    
});


document.getElementById('navBtn4').addEventListener('click', function() {
    ProfileSelected.classList.add('selected');
});

//---------- SOME RECIPES GO TO AN EXAMPLARY RECIPE PAGE -------------
let RecipeExample = document.getElementById('recipeExample');

document.getElementById('jsExamplaryRecipe').addEventListener('click', function() {
    Recipes.classList.remove('in-view'),
    RecipeExample.classList.add('in-view');
});

document.getElementById('closeExamplaryRecipe').addEventListener('click', function () {
    RecipeExample.classList.remove('in-view'),
    Recipes.classList.add('in-view');
});

/*
function myShinyNewFunction(theElementThatIClickedOn)
{
let navButtons = document.getElementsByClassName("navButtons");

for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].classList.remove("something");
}
document.getElementById(theElementThatIClickedOn).classList.add("somethingElse");
}

*/
