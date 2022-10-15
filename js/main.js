/* 

- Start To-Do App With Vanilla Javascript 

*/



// التطبيق دا جميل جدا و كمان عملته بطريقه مختلفه عن الى اتعلمتها قبل كدا مع انها خدت منى وقت طويل اووى بس اتعلمت منها طريقه تفكير تفضيليه جداً على الرغم من انها ممكن تكون اصعب بكتير من الطريقه الى اتعلمتها اثناء شرح الكورس بس بجد ممتعه لانها صعبه و كمان استعملت فيها جزئيه متقدمه اووى (و هو انى اعمل ماب على اوبجيكتس و عند شرط معين اعدل على الخواص بتاع الاوبجيت دا من خلال الاوبجيكت.ديفين بروبرتى().. كدا الحمد لله) و كمان ازاى تروح للوكال استوردج و مع كل خطوه بتعملها لازم تعدل فى الصفحه و كمان فى اللوكال استوردج و كمان ترجع تجيب منها العناصر بخواصها مظبوطه تمام ... 
// و النقطه الى تعتبر محوريه و هو ان اللوكال استوردج مش بتخزن جواها عناصر من الديكيومنت بتاعك ( يعنى مش هتعرف تخزن جواها ديفات او اسبان او غيره ) لا لازم تنشئ اوبجيكتس مثلا بتشيل الخواص بتاع عناصر الديكيومنت دى و بعدين نزق الاوبجيكتس دوول فى اراى و تزقها فى اللوكال استوردج الى بتتعامل مع استرنج ( يعنى هنا لازم تتعمال ب الجيسون.استرنج فاى(الاراى) ) و ترجع ترجعهم ب ( الجيسون.بارس(الاراى الى ف اللوكال استوردج) ) بجد كان تطبيق روووعه جداً ...الحمد لله حمداً طيباً مباركاً فيه .. الحمد لله حمداً ملئ السموات و الارض .. الحمد لله حمداً تطيب به النفوس .. الحمد لله حتى يبلغ الحمد منتهاه


// Defining All Variables We Need
let plusBtn = document.querySelector(".plus")
let task = document.querySelector(".tasks")
let Input = document.querySelector("[type='text']")
let tasksCount = document.querySelector(".tasks-count span")
let tasksCompleted = document.querySelector(".tasks-completed span");

// That Two Arrays To Deal With LocalStorage ===> --TasksArray >> دى علشان احزن فيها العناصر الى بتتنشئ من علامه البلاس او من الاينبوت تمام... -- LocalArray >>> دى علشان اقدر انى اخد الخواص بتاع كل عنصر من عناصر التاسكس اراى و اخزنهم فى اوبجيكتس و اروح ازق الاوبجيكتوس دوول ف اللوكال اراى الى هروح ازقها فى اللوكال استوردج-->( لان اللوكال استوردج مش بتتعامل مع الديكيومنت مباشر الا اما تحول عناصر الديكيومنت الى اوبجيكتس مثلا و هو دا اساس العمل دا كله ) علشان اعرف ارجع الخواص بتاع الاوبجيكتس دى الى ديفات فى الصفحه بعد ما اعمل ريفريش 
let TasksArray = [];
let LocalArray = [];


// Checking If The LocalStorage Has Any Objects (Which Refers To Divs) Then Making  A Loop To Give The Properties Of These Objects To Divs Which Will Added To The Home Page And Storing These Divs In The TasksArray هنا احنا هنروح ندور فى اللوكال استوردج على ايتم معينه احنا عاطينها اسم اما روحنا نحزن الابويكتس الى شايله الخواص بتاع الديفات قبل ما نعمل ريفيريش تمام .. الوقتى لو لقينا ان فى اوبجيكتس موجوده يبقى هنروح نزق الاوبجيكتس دول الى عناصر الى هم ديفات فى الصفحه و كمان لازم نحزن العناصر او الديفات دى فى التاسكس اراى طيب ليه ؟ دا علشان اما تجيب تضيف عنصر جديد بعد كدا و تخزن عناصر الاراى تاسكس اراى ف اللوكال استوردج كدا هتحزن العنصر الجديد بس انما لازم تخزن فيها العناصر الى راجعه من اللوكال استوردج و كمان العناصر الجديده الى انتا بتضيفها تمام كدا  
if (localStorage.getItem("tasksArray")) {
    let ReversedArray = JSON.parse(localStorage.getItem("tasksArray"));

    for (let i = 0; i < ReversedArray.length; i++) {
        let MyTask = document.createElement("div");
        MyTask.className = ReversedArray[i].class;
        let p = document.createElement("p");
        p.textContent = ReversedArray[i].text
        let deleteSpan = document.createElement("span")
        deleteSpan.className = "deleteSpan"
        deleteSpan.innerHTML = "X";

        MyTask.append(p, deleteSpan);
        task.append(MyTask)

        TasksArray.push(MyTask);

        // Restoring The Values Of TasksNum , CompletedNum
        tasksCount.textContent = task.children.length
        tasksCompleted.textContent = document.querySelectorAll(".tasks .completed").length
    }

}


// Clicking On Plus Button ==> اول حاجه هنعملها هو اننا هنضيف العنصر دا فى الصفحه تمام و كمان هنروح نضيفه فى اللوكال استوردج عن طريق اننا بنخزن العنصر دا فى تاسكس اراى و بعدين نعمل لوكال اراى بتحول العناصر او الديفات دى الى اوبجيكتس علشان نعرف نضيفها ف اللوكال استوردج تمام .. بس فى كام نقطه كدا و هى الوقتى انتا فى كل مره بتضيف عنصر بتعمل لووب على عناصر الاراى تاسكس علشان تضيف العناصر فى اللوكال استوردج صح بس الوقتى انتا مثلا لو ضيفت عنصر واحد عادى تمام طيب تعالا ضيف كمان عنصر هتلاقى ان اللوب الاول ضاف العنصر الاول و اللوب التانى ضاف العنصر الاول و العنصر التانى يبقى كدا فى عناصر هتتكرر صح يبقى الحل هنا انك فى كل مره قبل اللوب هتفضى الاراى لوكال اراى علشان مع اخر لووب ليها هتجيب كل العناصر بتاع التاسكس اراى و بدون اى تكرار لاى عنصر تمام   
plusBtn.addEventListener("click", () => {

    if (Input.value !== "") {
        AddingElementsToPage();
        AddingElementsToLocalStorage();
        // Every Click On Plus Button TasksNum Increase
        tasksCount.textContent = task.children.length;
        Input.focus();
    } else {
        return false
    }

})


// Clicking On Delete Span , TasksDiv We Determine The Action By Determining The Class Of The Element
document.addEventListener("click", (e) => {
    // In Case Of Clicking On Delete Span الوقتى لو احنا بنبدوس على الاسبان بتاع الريموف اول حاجه هتحصل اننا هنمسح العنصر دا من البيدج بتاعنا او نمسح الاب بتاعها تمام طيب ازاى بقى هنمسحه من اللوكال استوردج ؟ الوقتى انتا علشان تتعامل مع اللوكال استوردج لازم تتعامل مع التاسكس اراى الاول تمام يبقى لازم تشيل العنصر دا من التاسكس اراى و دا بعمل فلتر او انك تعمل اسبليس للاراى و تشيل منها العنصر دا تمام كدا التاسكس اراى هيكون فيها العناصر الى موجوده فى الصفحه بس يعنى كل ماتمسح عنصر هيتمسح من التاسكس اراى تمام يبقى كدا فاضل انك تروح تعدل بقى اللوكال استوردج و تزق فيها العناصر الى موجوده بس  يعنى هتجيب اللوكال اراى و تزق فيها العناصر او الاوبجيكتس الى موجوده فى الصفحه و التعديل على اللوكال استوردج سهل تمام كدا    
    if (e.target.classList.contains("deleteSpan")) {

        e.target.parentElement.remove();

        TasksArray.splice(TasksArray.indexOf(e.target.parentElement), 1)
        AddingElementsToLocalStorage();

        // Every Click On Delete Span TasksNum Decrease
        tasksCount.textContent = task.children.length
        tasksCompleted.textContent = document.querySelectorAll(".tasks .completed").length;

        // In Case Of Clicking On TasksDiv هنا فى حاله انك لو بتدوس على الديف تاسكس ديف نفسه مش بتدوس على الديليت اسبان اول حاجه هتحصل هو انك هتدى للديف دا اوباستى .5 او كلاس بيعبر عن كدا و كمان هتزود الكومبليتيد اسبان واحد تمام .. بعدين بقى النقطه الاهم و هو انك لازم تروح تعدل على الاوبجيكتس بتاع اللوكال استوردج علشان تضيف للاوبجيكت بتاع الديف الى دوست عليه اوباستى .5 هنا بقى انتا مش محتاج تتعامل مع التاسكس اراى صح  يعنى انتا محتاج تتعامل مع اللوكال اراى بس لاهنا عن طريقها بنقدر نزق العناصر فى اللوكال استوردج او ممكن نزق العناصر باى اراى تانيه عادى تمام يعنى بسهوله تقدر تجيب العناصر بتاع اللوكال استوردج و تعمل عليهم ماب و تشوف لو التسكت كونتنت بتاع الاب بتاع الحته الى واثق عليها بتساوى التكست بتاع الاوبجيكتس الى بتعمل عليها ماب ساعتها هنروح نعرف بروبرتى جديده او نعدل على البروبرتى بتاع الكلاس الى تاسك ديف و كمان كومبليتيد عن طريق الاوبجيكت.ديفين بروبرتى() تمام و لو غير كدا رجع العنصر عادى تمام و بعدين روح زق عناصر الاراى دى (اللوكال اراى فى نفس المكان(الايتم) الى بتخزن فيه العناصر) و بكدا هتلاقى ان الاوبجيكتس الى ف اللوكال استوردج هى كمان اتعدلت و بالتالى اما تعمل ريفيريش و تجيب الاوبجيكتس علشان تحولهم الى ديفات فى الصفحه واحد منهم او الى دوست عليه منهم هتلاقيه واخد الكلاس بتاع الكومبليتيد كدا تمام الحمد لله ....      
    } else if (e.target.classList.contains("TaskDiv")) {

        e.target.classList.toggle("completed")
        tasksCompleted.textContent = document.querySelectorAll(".tasks .completed").length

        // That Condition To Apply "Completed" Class On The Divs When We Bring Them From LocalStorage هنا احنا كان لازم اننا نعمل نستد كوندشن و نقول فيها اننا و احنا بنعمل المابنج لازم يكون فى شرط و هو ان لو الديف الى انا ضغطت عليه كان فيه الكلاس كومبليتد (الى هو بقى موجود بعد ما ضفطت على العنصر اصلا) يبقى ساعتها نروح نعدل على اللوكال اراى الى بتعدل على الاوبجيكت و بترجع ان الاوبجيكت بتاع الديف الى انتا دوست و اديتله كومبليتد الكلاس بتاعه يتعدل و يكون فيه كومبليتد متضافه تمام .. طيب لو العنصر الى انتا دوست عليه دا مش فيه كومبليتد (الى هو انتا اصلا حذفتها بعد ما دوست من تاثير التووجيل) تمام يبقى هنا انتا لازم تروح تعدل على الاوبجيكت بتاع الديف دا و تمسخ من الكلاس بتاعه كلمه كومبليتد علشان اما نيجى نرجع العناصر من اللوكال استوردج نلاقى ان الديف دا مش ف الكلاس بتاعه كلمه كومبليتد و بالتالى يكون مماثل للحاله الى كانت قبل ما تعمل ريفيريش... الحمد لله تمام جداً 
        if (e.target.classList.contains("completed")) {
            LocalArray = JSON.parse(localStorage.getItem("tasksArray")).map(function(el) {
                return el.text === e.target.children[0].textContent ? Object.defineProperty(el, "class", {
                    value: "TaskDiv completed"
                }) : el
            })
            localStorage.setItem("tasksArray", JSON.stringify(LocalArray))
        } else {
            LocalArray = JSON.parse(localStorage.getItem("tasksArray")).map(function(el) {
                return el.text === e.target.children[0].textContent ? Object.defineProperty(el, "class", {
                    value: "TaskDiv"
                }) : el
            })
            localStorage.setItem("tasksArray", JSON.stringify(LocalArray))
        }

    }

})

// Adding Animation To Delete Span When Hover On It By Adding Class "Spin"
document.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("deleteSpan")) {
        e.target.classList.add("spin")
    }
})

// Adding Elements To The Page , TasksArray  Function
function AddingElementsToPage() {
    let MyTask = document.createElement("div");
    MyTask.className = "TaskDiv";
    let p = document.createElement("p");
    p.textContent = Input.value
    Input.value = ""
    let deleteSpan = document.createElement("span")
    deleteSpan.className = "deleteSpan"
    deleteSpan.textContent = "X";

    MyTask.append(p, deleteSpan);
    task.append(MyTask);

    TasksArray.push(MyTask)

}

// Adding Elements To LocalArray Then Adding It(Objects) To The LocalStorage  Function
function AddingElementsToLocalStorage() {
    LocalArray = [];
    for (let i = 0; i < TasksArray.length; i++) {
        let object = {
            id: new Date(),
            class: TasksArray[i].className,
            text: TasksArray[i].children[0].textContent
        }
        LocalArray.push(object)
    }
    localStorage.setItem("tasksArray", JSON.stringify(LocalArray))
}


// ** ملاحظه مهمه جداً و تعتبر بتنفذ نفس الفكره الى اتعلمناها اثناء شرح الكورس او شرح التطبيق دا سابقاً ** 
// ( علفكره احنا مكناش فى حاجه اننا نعمل اتنين اراى الى هم التاسكس اراى و اللوكال اراى لان كان ممكن نعمل تاسكس اراى بس و نزق فيها الاوجيكتس الى شايله الخواص بتاع كل عنصر او ديف من ديفات الصفحه الى بيتم انشائهم--> اما تضغط على علامه البلاس الى عندها --> هتنشئ الديف ف الصفحه و تنشئ الاوبجيكت الى بياخد خواص الديف دا علشان تروح تزقهم فى--> التاسكس اراى و كمان تزق التاسكس اراى --> ف اللوكال استوردج لانهم هنا اوبجيكتس و ليسوا ديفات و بعدين مع كل تعديل(مسح مثلا) هتفلتر التاسكس اراى دى او تعملها اسبلايس و بعدين تزقها فى اللوكال استوردج مباشر و كمان هتعمل فكره مقاربه عند اضافه الكلاس كومبليتد للعناصر  <<< (ممكن نقول اننا عملنا الاراى لوكال اراى زياده و بالتالى هى الى زودت الكوود جدا و كمان تعتبر مساحه اكبر و جهد او عبء اكبر لانك كدا كانك دخلت وسيط ياخد من التاسكس اراى و يودى للوكال و العكس ) >>>  ) 





// الحمد لله حمداً كثيراً
// الحمد لله عدد ما كان و عدد ما يكون و عدد الحركات و السكون
// الحمد لله حمداً طيباً مباركاُ فيه
// الحمد لله حمداً ملئ السموات و الارض 
// الحمد لله حمداً تطيب به النفوس 
// الحمد لله حتى يبلغ الحمد منتهاه


/* End To-Do App With Vanilla Javascript */






// الحمد لله حمداً كثيراً مباركاً فيه
// الحمد لله حمداً ملئ السموات و الارض
// الحمد لله عدد ما كان و عدد ما يكون و عدد الحركات و السكون
// الحمد لله حمداً طيباً مباركاً فيه 
// الحمد لله حتى يرضى و الحمد لله عند الرضى و الحمد لله بعد الرضى
// الحمد لله حمداً تطيب به النفوس 
// الحمد لله حتى يبلغ الحمد منتهاه
// اللهم انى استودعك ما حفظت و ما فهمت و ما قرأت و ما كتبت أمانه و وديعه عندك و أسالك ان ترضه على عند حاجتى اليه فانت حسبى و نعم الوكيل ....