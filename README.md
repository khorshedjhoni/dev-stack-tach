# 🚀 Dev Stack

## 📌 Description

Dev Stack is a responsive web application that allows users to explore different development technologies and build their own personalized technology stack. Users can view technology details and easily add or remove technologies from their stack.

## 🛠️ Technologies Used

* React
* TypeScript
* Tailwind CSS
* DaisyUI
* React-Toastify
* React Icons
* Vite
* JSON

## ✨ Features

1. **Add to Stack**
   Users can add their favorite technologies to the **Your Stack** section. Once added, the button becomes disabled to indicate that the technology is already selected.

2. **Remove Technologies**
   Users can remove individual technologies from their stack or use the **Remove All** button to clear the entire stack.

3. **Duplicate Prevention & Notifications**
   The application prevents the same technology from being added multiple times and uses **React-Toastify** to show notifications for adding, removing, duplicate attempts, and clearing the stack.


## Question and Answer

#### 1.What is JSX, and why is it used in React?
   
   JSX is a syntax extension for JavaScript that allows you to write HTML-like code directly inside your JavaScript files.
   
   It is used in React because it makes creating UI components easier and more readable.The code is more managable also
   ___
#### 2.What is the difference between props and state?
   
   Props used to pass data to one componet to another component.It connet to component
   
   on the other side state is used to manage and store data,it has also a set function which update the data
   ___
#### 3.What does the useState hook do, and where did you use it in this project?
   it is a react hoock which is used to create and manage state in functional component.
   i use this in the project for changing ui,when i add a technology to Your stack part by clicking button
   ___
#### 4.What does the useEffect hook do, and why did you need it to load the JSON data?
   it is used to perform side effects in a react component.
   In the react a components rendering function must remain stable.it should simply take state and pass props and return JSX.We cannot directly fetch data inside the main body of a component function.becaus fetching asynchronous data triggers state updates, which trigger re-renders.which will be  causing an infinite render loop.useEffect solves this by decoupling side effects from the render phase. Here is why it is essential for loading JSON data.
   ***
   
#### 5.Why does every item in a .map() list need a unique key prop?
   react needs a unique key to identify each item in a list.it helps react understand which item was added,removed and changed,so react can update the UI efficiently.
   
   ***
#### 6.What is conditional rendering? Show one place you used it (example: the empty stack message).
   Conditional rendering means displaying different UI based on a different condition
   I used in the SelectedTech component ,here is the code
```
{isTech.length == 0 ? (
        <div>
          <p className="p-4 leading-1 font-semibold text-l">
            No technologies selected yet.
          </p>
          <label className=" m-4 card rounded-2xl border border-dashed text-accent-content">
            <input type="checkbox" name="card-urgent-1" />
            <div className="card-body">
              <p className="text-center">Your stack is empty.</p>
            </div>
          </label>
        </div>
      ) : (
        <p className="p-4 leading-1 font-semibold text-xl">
          {isTech.length} Technology Selected
        </p>
      )}

```
___
#### 7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

###### when pass data from parent component to child component,we pass it as props.
   

```
//parent component
<PlayerCard player={player} />
```
```
//child component
function PlayerCard({ player }) {
  return <h2>{player.playerName}</h2>;
}
```

###### react doesnt directly pass data upward.the parent passes a callback function to the child.

   
```
//parent component
function Parent() {
  const handleSelect = (id) => {
    console.log(id);
  };

  return <Child onSelect={handleSelect} />;
}
```
```
function Child({ onSelect }) {
  return (
    <button onClick={() => onSelect(1)}>
      Select
    </button>
  );
}
```
