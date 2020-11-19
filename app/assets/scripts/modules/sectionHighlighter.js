import throttle from "lodash/throttle";
class sectionHighlighter
{
    constructor(linkHtmlID, sectionHtmlID)
    {
        console.log("sectionHighlighter(sectionHtmlID:" +sectionHtmlID +")");
        this.linkElem = document.getElementById(linkHtmlID);
        this.sectionElem = document.getElementById(sectionHtmlID);
        this.scrollThrottle = throttle(this.doCalc, 200).bind(this);
        window.addEventListener("scroll", this.scrollThrottle);
    }    

    
    doCalc()
    {
        console.log("sectionHighlighter.doCalc()");
        let elemRect = this.sectionElem.getBoundingClientRect();

        if((0 <= elemRect.y) && (elemRect.y <= window.innerHeight))
        {
            console.log("over section: " +this.sectionElem);

            if(!this.linkElem.classList.contains("section-link--highlight"))
            {
                this.linkElem.classList.add("section-link--highlight");
                console.log("featured link: " +this.linkElem);
            }
        }else
        {
            if(this.linkElem.classList.contains("section-link--highlight"))
            {
                this.linkElem.classList.remove("section-link--highlight");
                console.log("de-featured link: " +this.linkElem);
            }
        }
    }

}

export default sectionHighlighter