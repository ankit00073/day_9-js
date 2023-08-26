document.addEventListener("DOMContentLoaded", function () {
    // Get references to the select elements and the div
    const colorSelect = document.getElementById("color");
    const bgColorSelect = document.getElementById("bgColor");
    const paddingSelect = document.getElementById("padding");
    const fontSizeSelect = document.getElementById("fontSize");
    const fontWeightSelect = document.getElementById("fontWeight");
    const changingDiv = document.getElementById("changingDiv");

    // Add event listeners to the select elements
    colorSelect.addEventListener("change", function () {
        changingDiv.style.color = colorSelect.value;
    });

    bgColorSelect.addEventListener("change", function () {
        changingDiv.style.backgroundColor = bgColorSelect.value;
    });

    paddingSelect.addEventListener("change", function () {
        changingDiv.style.padding = paddingSelect.value;
    });

    fontSizeSelect.addEventListener("change", function () {
        changingDiv.style.fontSize = fontSizeSelect.value;
    });

    fontWeightSelect.addEventListener("change", function () {
        changingDiv.style.fontWeight = fontWeightSelect.value;
    });
});
