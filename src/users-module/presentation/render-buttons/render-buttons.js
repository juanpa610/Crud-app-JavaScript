import "./render-buttons.css";
import usersStore from "../../store/users-store";
import { RenderTable } from "../render-table/render-table";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons = (element) => {

    const prevButton = document.createElement("button");
    prevButton.innerHTML = "< Prev ";

    const nextButton = document.createElement("button");
    nextButton.innerHTML = " Next >";


    let currentPageLabel = document.createElement("span");
    currentPageLabel.id = "current-page";
    currentPageLabel.innerHTML = usersStore.getCurrentPage();

    element.append(prevButton, currentPageLabel, nextButton);

    prevButton.addEventListener("click", async() =>{
        const users = await usersStore.loadPreviosPage();
        currentPageLabel.innerHTML = usersStore.getCurrentPage();
        RenderTable(element);
    });
    
    nextButton.addEventListener("click", async() =>{
        const users = await usersStore.loadNextPage();
        currentPageLabel.innerHTML = usersStore.getCurrentPage();
        RenderTable(element);
    });

}