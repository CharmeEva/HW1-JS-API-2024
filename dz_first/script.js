const lessonData = [
    {
        title: 'Йога №1',
        time: '08:00 - 09:00',
        max_num: 16,
        count_num: 6
    },
    {
        title: 'Йога №2',
        time: '09:00 - 10:00',
        max_num: 35,
        count_num: 20
    },
    {
        title: 'Йога №3',
        time: '15:00 - 16:00',
        max_num: 38,
        count_num: 37
    }
];

lessonData.forEach(element => {
    const lessonItem = createLesson(element.title, element.time, element.max_num, element.count_num);
    lessonList.append(lessonItem);
});

function createLesson(title, time, max_num, count_num) {
    const lessonItem = document.createElement('li');
    lessonItem.classList.add('list-group-item');
    lessonItem.id = title.slice(title.indexOf('№') + 1);

    const lessonTitle = document.createElement('h2');
    lessonTitle.classList.add('mb-3');
    lessonTitle.textContent = title;

    const lessonTime = document.createElement('p');
    lessonTime.textContent = 'Начало занятия: ' + time;

    const lessonMaxCount = document.createElement('p');
    lessonMaxCount.textContent = 'Количество мест: ' + max_num;

    const lessonCountStudents = document.createElement('p');
    lessonCountStudents.textContent = 'Количество участников: ' + count_num;

    const editButton = document.createElement('button');
    editButton.textContent = 'Записаться';
    editButton.classList.add('btn', 'btn-warning');
    editButton.id = lessonTitle.textContent;
    editButton.style.marginRight = '10px';

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Отменить запись';
    cancelButton.classList.add('btn', 'btn-danger');
    cancelButton.id = 'FF' + title.slice(title.indexOf('№') + 1);

    lessonItem.append(lessonTitle);
    lessonItem.append(lessonTime);
    lessonItem.append(lessonMaxCount);
    lessonItem.append(lessonCountStudents);
    lessonItem.append(editButton);
    lessonItem.append(cancelButton);
    return lessonItem;
};

document.addEventListener('click', function (e) {

    nCh = document.getElementById("lessonList");

    console.log(e.target.id);

    for (let index = 0; index < lessonData.length; index++) {

        if (lessonData[index].title === e.target.id) {

            console.log(lessonData[index].count_num + 1);
            nDel = document.getElementById(`${index + 1}`);

            console.log(nDel);

            const lessonItem = createLesson(lessonData[index].title, lessonData[index].time, lessonData[index].max_num, lessonData[index].count_num + 1);

            nDel.replaceWith(lessonItem);
            if ((lessonData[index].count_num + 1) === lessonData[index].max_num) {
                const editButton = document.getElementById(e.target.id);
                const nBtn = document.getElementById(e.target.id);
                console.log(lessonData[index].max_num);
                nBtn.classList.add("disabled");
                nBtn.disabled = true;
                editButton.replaceWith(nBtn);

            }
        }


    };
    if (e.target.id === 'FF1') {

        nDel2 = document.getElementById(`${(e.target.id).substr((e.target.id).length - 1)}`);

        console.log(nDel2);

        const lessonItem = createLesson(
            lessonData[((e.target.id).substr((e.target.id).length - 1)) - 1].title, lessonData[((e.target.id).substr((e.target.id).length - 1)) - 1].time, 
            lessonData[((e.target.id).substr((e.target.id).length - 1)) - 1].max_num, lessonData[((e.target.id).substr((e.target.id).length - 1)) - 1].count_num);

        nDel2.replaceWith(lessonItem);

    }

    if (e.target.id === 'FF2') {

        nDel3 = document.getElementById(`${(e.target.id).substr((e.target.id).length - 1)}`);

        console.log(nDel3);

        const lessonItem = createLesson(
            lessonData[((e.target.id).substr((e.target.id).length - 1)) - 1].title, lessonData[((e.target.id).substr((e.target.id).length - 1)) - 1].time, 
            lessonData[((e.target.id).substr((e.target.id).length - 1)) - 1].max_num, lessonData[((e.target.id).substr((e.target.id).length - 1)) - 1].count_num);

        nDel3.replaceWith(lessonItem);

    }

    if (e.target.id === 'FF') {
        window.location.reload()
    }

});
