let marksObtained = +prompt("Obtained")
let totalMarks = +prompt("Total")
let percentage = ((marksObtained / totalMarks) * 100)


if (totalMarks >= marksObtained) {
    document.write("<h1>", "Percentage of ", marksObtained, "/", totalMarks, " is : ", percentage, "%", "</h1>")
}

else {
    document.write("<h1>", "Invalid percentage", "</h1>")
    document.write("<h1>", "Enter Correct Marks", "</h1>")
}