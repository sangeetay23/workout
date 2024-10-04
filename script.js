const API_URL = 'http://localhost:5001/api/workouts';

const editIcon = `<i class="fas fa-edit"></i>`;
const deleteIcon = `<i class="fas fa-trash"></i>`;

function clearInputs() {
    wInput.value = "";
    eInput.value = "";
    bInput.value = "";
}

function addToLocalStorage() {
    localStorage.setItem("date", JSON.stringify(date));
    localStorage.setItem("water", JSON.stringify(water));
    localStorage.setItem("exercise", JSON.stringify(exercise));
    localStorage.setItem("bloodsugar", JSON.stringify(bloodsugar));
}

function activateEdit(i) {
    wInput.value = water[i];
    eInput.value = exercise[i];
    bInput.value = bloodsugar[i];
    editIndex = i;
    submitButton.classList.add("hidden");
    editSection.classList.remove("hidden");
}

function cancelEdit() {
    clearInputs();
    editIndex = -1;
    submitButton.classList.remove("hidden");
    editSection.classList.add("hidden");
}

async function editRow() {
    if (editIndex === -1) return;

    const workoutData = {
        type: wInput.value,
        duration: parseInt(eInput.value),
        intensity: bInput.value,
        caloriesBurned: parseInt(bInput.value)
    };

    try {
        await fetch(`${API_URL}/${date[editIndex]}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(workoutData)
        });
        fillTable();
        addToLocalStorage();
        cancelEdit();
    } catch (error) {
        console.error('Error updating workout:', error);
    }
}

async function deleteRow(i) {
    if (!confirm(`Confirm that you want to delete the entry: 
    \n ${date[i]}: ${water[i]}ml, ${exercise[i]}min, 
${bloodsugar[i]}mg/dL`)) return;

    try {
        await fetch(`${API_URL}/${date[i]}`, {
            method: 'DELETE'
        });
        date.splice(i, 1);
        water.splice(i, 1);
        exercise.splice(i, 1);
        bloodsugar.splice(i, 1);
        
        document.querySelector(`#output > tr:nth-child(${i + 1})`)
            .classList.add("delete-animation");
        
        addToLocalStorage();
        setTimeout(fillTable, 500);
    } catch (error) {
        console.error('Error deleting workout:', error);
    }
}

async function fillTable() {
    const tbody = document.getElementById("output");
    
    try {
        const response = await fetch(API_URL);
        const workouts = await response.json();
        
        let html = "";
        workouts.forEach((workout, index) => {
            html += `<tr>
                <td>${new Date(workout.createdAt).toLocaleDateString()}</td>
                <td>${workout.type}</td>
                <td>${workout.duration}</td>
                <td>${workout.caloriesBurned}</td>
                <td>
                    <button onclick="activateEdit(${index})" class="edit">${editIcon}</button>
                </td>
                <td>
                    <button onclick="deleteRow(${index})" class="delete">${deleteIcon}</button>
                </td>
            </tr>`;
        });
        
        tbody.innerHTML = html;
        
    } catch (error) {
        console.error('Error fetching workouts:', error);
    }
}

let editIndex = -1;

const wInput = document.getElementById("water");
const eInput = document.getElementById("exercise");
const bInput = document.getElementById("bloodsugerlevel");

const submitButton = document.getElementById("submit");
const editSection = document.getElementById("editSection");

fillTable();

submitButton.addEventListener("click", async () => {
    const w = wInput.value || null;
    const e = eInput.value || null;
    const b = bInput.value || null;

    if (w === null || e === null || b === null) {
        alert("Please enter all the fields.");
        return;
    }

    const workoutData = {
        type: w,
        duration: parseInt(e),
        intensity: b,
        caloriesBurned: parseInt(b)
    };

    try {
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(workoutData)
        });

        clearInputs();
        fillTable();
        
    } catch (error) {
        console.error('Error adding workout:', error);
    }
});