import throttle from "lodash/throttle";

class scrollReveal
{
    constructor(elements)
    {
        console.log("scrollReveal: " +elements);
        this.itemsToReveal =  elements;
        this.itemsToReveal.forEach(item => item.classList.add("reveal-item"));
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        window.addEventListener("scroll", this.scrollThrottle);
    }
    
    calcCaller()
    {
        //console.log("calcCaller");
        this.itemsToReveal.forEach(item => 
            {
                this.checkForVisible(item);
            });
    }
    
    checkForVisible(element)
    {
        //console.log("checkForVisible");
        let scrollPercent = (element.getBoundingClientRect().y / window.innerHeight) * 100;
        if(scrollPercent < 75 && !element.classList.contains("reveal-item--visible"))
        {
            element.classList.add("reveal-item--visible");
            element.removeEventListener("scroll", this.scrollThrottle);
            console.log("revealed element: " +element);
        }

        this.allRevealed = true;
        //console.log("checkForVisible this: " +this);
        var i;
        for (i = 0; i < this.itemsToReveal.length; i++)
        {
            let item = this.itemsToReveal[i];
            if(this.allRevealed && !item.classList.contains("reveal-item--visible"))
            {
                //console.log("checkForVisible inner function this: " +this);
                //onsole.log("found unrevealed element: " +item);
                this.allRevealed = false;
            }
        };
         
         if(this.allRevealed)
         {
            window.removeEventListener("scroll", this.scrollThrottle);
            console.log("deregister scroll listener");
         }
    }
}


export default scrollReveal;