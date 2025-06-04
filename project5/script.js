function addTodo(){
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const originalHtml = document.getElementById("container").innerHTML;
    // document.createElement
    const childDiv = document.createElement("div"); // <div></div>
    childDiv.innerHTML = title;
    document.getElementById("container").appendChild(childDiv);

    //<div>
    //     <div> title </div>
    //     <div> description </div>
    //     <button> </button>
    // </div>

    // document.getElementById("container")
    // .innerHTML = originalHtml + `
    //  <div>
    //  <div> ${title} </div>
    //  <div> ${description} </div>
    //  <button> Mark as Done </button>
    //  </div>
    // `
}