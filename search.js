function onKeyPressedStudent() {

    const student_name_input = document.getElementById("name_input").value.trim().toLowerCase();

    const student_list = document.getElementsByClassName("student_li");

    for (let i=0; i<student_list.length; i++) {

        const nameElement = student_list[i].getElementsByClassName("student_name")[0]; // getElementByClassName() returns a list of elements so need to select the first (and only) element */
        const name = nameElement.textContent.trim().toLowerCase(); // extract the actual name as text content from the above element

        if (name.includes(student_name_input)) {
            student_list[i].style.display = ""; // show (restore default)
        } else {
            student_list[i].style.display = "none"; //hide
        }
    }


}

function onKeyPressedModule() {

    const module_input = document.getElementById("module_input").value.trim().toLowerCase();

    const student_list = document.getElementsByClassName("student_li"); // list of html elements of class students_li

    for (let i=0; i<student_list.length; i++) { // parse through students

        const module_list = student_list[i].getElementsByClassName("module_li"); // extract current student's studied modules
        let match = false; // boolean to check whether any module matches

        for (let j=0; j<module_list.length; j++) { // parse through studied modules

            const module = module_list[j].textContent.trim().toLowerCase(); //extract current module's name

            if (module.includes(module_input)) {
                match = true; // a matching module has been found
                break; // no need to check for remaining modules
            }
        }

        if (match) {
            student_list[i].style.display = ""; // show
        } else {
            student_list[i].style.display = "none";
        }
    }
}

document.getElementById("name_input").addEventListener("input", onKeyPressedStudent);
document.getElementById("module_input").addEventListener("input", onKeyPressedModule);