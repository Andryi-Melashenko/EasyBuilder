class Element{
  constructor(htmlVal, cssVal,jsVal,customCssVal,tree){
    this.htmlVal = htmlVal;
    this.cssVal = cssVal;
    this.jsVal = jsVal;
    this.customCssVal = customCssVal;
    this.tree = tree;
  }
}
let elementNew = new Element('','','','','');
function CreateEditor(htmlContainer, language) {
  require.config({ paths: { vs: "../../../../Easy-Builder/assets/plugins/monaco/min/vs" } });
  require(["vs/editor/editor.main"], function () {
    var container = document.getElementById(htmlContainer);
    if (language === "html") {
      emmetMonaco.emmetHTML();
      window.editorHTML = monaco.editor.create(container, {
        value: elementNew.htmlVal,
        language: language,
      });
    }
    if (language === "css") {
      emmetMonaco.emmetCSS();
      window.editorCSS = monaco.editor.create(container, {
        value: elementNew.cssVal,
        language: language,
      });
    } else if (language === "js") {
      window.editorJS = monaco.editor.create(container, {
        value: elementNew.jsVal,
        language: language,
      });
    } else {
      return `${language} language is not available`;
    }
  });
}
function ChangeEditorTheme(id) {
  let themePicker = document.getElementById(id);
  themePicker.onchange = function () {
    let theme = this.options[this.selectedIndex].getAttribute("value");
    monaco.editor.setTheme(theme);
  };
}

// to do show on extra panel
$('#task-Studio').on('click', function(){
  let data = [];
  let rowData = ' <div class="col-lg-12"> <div class="card"> <div class="card-body"> <div class="todo-list"> <ul class="list-unstyled"> <li> <a href="javascript: void(0);" class="custom-checkbox"> <input type="checkbox" class="custom-control-input" id="task1"> <label class="custom-control-label" for="task1"></label> Go to shop </a> </li> <li> <a href="javascript: void(0);" class="custom-checkbox"> <input type="checkbox" class="custom-control-input" id="task2"> <label class="custom-control-label" for="task2"></label> Finish java assignment </a> </li> <li> <a href="javascript: void(0);" class="custom-checkbox"> <input type="checkbox" class="custom-control-input" id="task3"> <label class="custom-control-label" for="task3"></label> Send e-mail to Dr. Collins </a> </li> <li> <a href="javascript: void(0);" class="custom-checkbox"> <input type="checkbox" class="custom-control-input" id="task4"> <label class="custom-control-label" for="task4"></label> Delete all folders in ../assets/plugins </a> </li> <li> <a href="javascript: void(0);"class="custom-checkbox done"> <input type="checkbox" class="custom-control-input" id="task5" checked> <label class="custom-control-label" for="task5"></label> Sell iPad Mini </a> </li> <li> <a href="javascript: void(0);" class="custom-checkbox done"> <input type="checkbox" class="custom-control-input" id="task6" checked> <label class="custom-control-label" for="task6"></label> Create new Amazon account </a> </li> <li> <a href="javascript: void(0);" class="custom-checkbox"> <input type="checkbox" class="custom-control-input" id="task7"> <label class="custom-control-label" for="task7"></label> Check new codes from section #7 student assignments </a> </li> </ul> </div> </div> </div> </div> <div class="col-lg-12"> <div class="card"> <div class="card-body"> <div class="todo-sidebar"> <div class="todo-new-task"> <button class="btn btn-primary btn-block" data-toggle="modal" data-target="#newTask">Create New Task</button> <div class="modal fade" id="newTask" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"> <div class="modal-dialog modal-dialog-centered" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="exampleModalLabel">New Task</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <i class="material-icons">close</i> </button> </div> <div class="modal-body"> <form> <div class="form-group"> <input type="text" class="form-control" id="new-task-name" placeholder="Task Name"> </div> </form> </div> <div class="modal-footer"> <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button> <button type="button" class="btn btn-primary">Add</button> </div> </div> </div> </div> </div> <div class="todo-menu"> <ul class="list-unstyled"> <li class="active"><a href="#"><i class="fas fa-bars"></i>All</a></li> <li><a href="#"><i class="fas fa-check"></i>Completed</a></li> <li><a href="#"><i class="fas fa-trash"></i>Deleted</a></li> </ul> </div> <div class="divider"></div> <div class="todo-search"> <form> <div class="input-group"> <input type="text" id="todo-search" class="form-control" placeholder="Search task"> </div> </form> </div> </div> </div> </div> </div>';
  data.push(new elementOnPanel('<div>','','','container-PB','#extra-panel-Studio'));
  data.push(new elementOnPanel('<DIV>','','connect-wrapper','connect-wrapper','#container-PB'));
  data.push(new elementOnPanel('<DIV>',rowData,'row','connect-rowPB','#connect-wrapper'));
  addDataByClick('#task-Studio',data,  '#extra-panel-Studio',['content-extra-panel-Studio-task'],'extra-panel-Studio');

  "use strict";

  if($('#extra-panel-Studio').hasClass('#task-Studioclicked'))
  {
      var input = document.querySelector('#todo-search');
      var log;

      input.addEventListener('input', updateValue);
      
      function updateValue(e) {
          log = e.target.value;
      }
      
      
      input.addEventListener('input', updateList);
      
      function updateList(e) {
          $('.todo-list ul li a').each(function( index ) {
              if ($(this).text().toLowerCase().indexOf(log.toLowerCase()) >= 0) {
                  $(this).fadeIn(300);
              } else {
                  $(this).fadeOut(300);
              }
          });
      }
      
      $('.todo-list ul li a input[type="checkbox"]').change(function() {
          if($(this).prop('checked') > 0) {
              $(this).parent().addClass('done');
          } else {
              $(this).parent().removeClass('done');
          }
      });
  }
})

$('#Html-Studio').on('click', function(){
  let data = [];
  data.push(new elementOnPanel('<div>','','html-editor-container','html-editor-container','#work-table'));
  data.push(new elementOnPanel('<div>','','card','html-editor-card','#html-editor-container'));
  data.push(new elementOnPanel('<div>','','card-header d-flex justify-content-between align-items-center','html-editor-card-header','#html-editor-card'));
  data.push(new elementOnPanel('<h3>','HTML','font-weight-bold','html-editor-card-header-text','#html-editor-card-header'));
  data.push(new elementOnPanel('<div>','','card-body','html-editor-sub-container','#html-editor-card'));
  data.push(new elementOnPanel('<div>','','shadow-sm border code-monaco-editor-St','html-editor','#html-editor-sub-container'));


  //addDataByClick('#Html-Studio',data,'#work-table','','work-table');
  if($('#work-table').hasClass('#Html-Studio'+'clicked')){
    $('#work-table').removeClass('#Html-Studio'+'clicked');
    elementNew.htmlVal = window.editorHTML.getValue();
    $('#html-editor-container').remove();
  }
  else{
    appendElement(data);
    $('#work-table').addClass('#Html-Studio'+'clicked');
    dradElement('html-editor-container');
    CreateEditor("html-editor", "html");
  }
})

$('#send-data-Studio').on('click', function(){
  if(window.editorHTML !== undefined){
    let htmlEditorValue =  window.editorHTML.getValue();
    let data = {
      "html":htmlEditorValue
    };
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST","https://localhost:5001/studio");
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhttp.onreadystatechange = function(){
          if(this.readyState === 4){
            console.log(JSON.parse(this.response));
          }
        }
        xhttp.send(JSON.stringify(data));
      }
})
    
    
//ChangeEditorTheme("theme-choose");

// Resize
function makeResizableDiv(div) {
  const element = document.querySelector(div);
  const resizers = document.querySelectorAll(div + ' .resizer')
  const minimum_size = 20;
  let original_width = 0;
  let original_height = 0;
  let original_x = 0;
  let original_y = 0;
  let original_mouse_x = 0;
  let original_mouse_y = 0;
  for (let i = 0;i < resizers.length; i++) {
    const currentResizer = resizers[i];
    currentResizer.addEventListener('mousedown', function(e) {
      e.preventDefault()
      original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
      original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
      original_x = element.getBoundingClientRect().left;
      original_y = element.getBoundingClientRect().top;
      original_mouse_x = e.pageX;
      original_mouse_y = e.pageY;
      window.addEventListener('mousemove', resize)
      window.addEventListener('mouseup', stopResize)
    })
    
    function resize(e) {
      if (currentResizer.classList.contains('bottom-right')) {
        const width = original_width + (e.pageX - original_mouse_x);
        const height = original_height + (e.pageY - original_mouse_y)
        if (width > minimum_size) {
          element.style.width = width + 'px'
        }
        if (height > minimum_size) {
          element.style.height = height + 'px'
        }
      }
      else if (currentResizer.classList.contains('bottom-left')) {
        const height = original_height + (e.pageY - original_mouse_y)
        const width = original_width - (e.pageX - original_mouse_x)
        if (height > minimum_size) {
          element.style.height = height + 'px'
        }
        if (width > minimum_size) {
          element.style.width = width + 'px'
          element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
        }
      }
      else if (currentResizer.classList.contains('top-right')) {
        const width = original_width + (e.pageX - original_mouse_x)
        const height = original_height - (e.pageY - original_mouse_y)
        if (width > minimum_size) {
          element.style.width = width + 'px'
        }
        if (height > minimum_size) {
          element.style.height = height + 'px'
          element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
        }
      }
      else {
        const width = original_width - (e.pageX - original_mouse_x)
        const height = original_height - (e.pageY - original_mouse_y)
        if (width > minimum_size) {
          element.style.width = width + 'px'
          element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
        }
        if (height > minimum_size) {
          element.style.height = height + 'px'
          element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
        }
      }
    }
    
    function stopResize() {
      window.removeEventListener('mousemove', resize)
    }
  }
}

//makeResizableDiv('.resizable')