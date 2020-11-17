import throttle from "lodash/throttle";
class stickyHeader
{
    constructor(lightHtmlClass)
    {
        //console.log("stickyHeader(lightHtmlClass:" +lightHtmlClass +")");
        this.headerElem = document.querySelector(".sticky-header");
        this.lightElems = document.querySelectorAll(lightHtmlClass);
        //console.log("stickyHeader - lightElems:" + this.lightElems);
        this.scrollThrottle = throttle(this.doCalc, 200).bind(this);
        window.addEventListener("scroll", this.scrollThrottle);
    }    

    
    doCalc()
    {
        //console.log("doCalc");
        let intersectElem = false;
        var i;
        for (i = 0; i < this.lightElems.length; i++)
        {
            let element = this.lightElems[i];
            intersectElem = intersectElem || this.checkForIntersect(element);
        }
        
        if(!intersectElem && !this.headerElem.classList.contains("sticky-header--dark"))
        {
            this.headerElem.classList.add("sticky-header--dark");
            console.log("darkened header: " +this.headerElem);
        }
    }

    
    checkForIntersect(element)
    {
        //console.log("checkForIntersect - element: " +element);
        let elemRect = element.getBoundingClientRect();
        let headerRect = this.headerElem.getBoundingClientRect();
        if(elemRect.y <= headerRect.y && headerRect.y < (elemRect.y + elemRect.height))
        {
            if(this.headerElem.classList.contains("sticky-header--dark"))
            {
                this.headerElem.classList.remove("sticky-header--dark");
                console.log("lightened header over element: " +element);
            }
            return true;
        }
        return false;
    }

}

export default stickyHeader