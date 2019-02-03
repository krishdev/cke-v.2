import Vue from 'vue'
import $ from 'jquery'
var modalBoxes = [];
var modalCount = 0;

export const modalBox = {
     bind: function (el, binding) {
        el.setAttribute("data-modal-index", modalCount+=1);
        var modal = {
            showHeader: false,
            header: '',
            showFooter: false,
            footer: '',
            showNavigation: false,
            conditional: false,
            content:[],
            target:''
        };
        var tmpl = "<div id='shadowOverlay'></div><div id='modal'><section class='modald'>"+
                    "<header class='modal-header'></header><article class='modal-content'>"+
                    "<figure><img src=''></img></figure>"+
                    "</article><footer class='modal-footer'></footer>"+
                    "<a href='javascript:;' title='previous' class='btn-previous'><i class='fa fa-chevron-circle-left''></i></a>"+
                    "<a href='javascript:;' title='next' class='btn-next'><i class='fa fa-chevron-circle-right''></i></a>"+
                    "<a href='javascript:;' title='close' class='btn-close'><i class='fa fa-times'></i></a>"+
                    "</section></div>";
        var wrapper = document.createElement("DIV");
        wrapper.id="modalbox";
        wrapper.innerHTML = tmpl;
        var modObj = {
          el:el,
          attributes:[],
          index: el.getAttribute("data-modal-index")
        };
        //debugger;
        var $app = document.querySelector("body");

        var children = [];
        setTimeout(function () {
            el.getAttribute("data-modal") ? children.push(el) : children = el.children;
            var attributes = [];
            var item;
            var currentIndex;
            function render(event) {
                attributes = [];
                var dmodal = document.querySelectorAll('[data-modal]');
                for(var i = 0 ; i < dmodal.length ; i++) {
                    attributes.push(dmodal[i].getAttribute("data-modal"))
                }
                modal.target = parseInt(event.currentTarget.getAttribute("data-modal-index") ? event.currentTarget.getAttribute("data-modal-index") : event.currentTarget.parentElement.getAttribute("data-modal-index"));
                modal.conten = [];
                var thisModalAttr = document.querySelectorAll('[data-modal]').length;
                modal.content = event.target.getAttribute('data-modal');
                document.querySelector("#modal").classList.add("show");
                if(thisModalAttr ==1) {
                   document.querySelector("#modal").classList.add("hideBtn");
                }else{
                  document.querySelector("#modal").classList.remove("hideBtn");
                }
                var imgsrc = event.currentTarget.getAttribute("data-modal");
                currentIndex = attributes.indexOf(imgsrc);
                document.querySelector(".modal-content img").src = imgsrc;
            };
            for(var i = 0 ; i < children.length ; i++) {
              item = children[i].getAttribute("data-modal")
              if(item) {
                attributes.push(item);
                modObj.attributes.push(item)
              }
              
            }
            
            $(document).on('click', "[data-modal]", function(event){
                render(event);
            });
            modalBoxes.push(modObj);
            var attrLength = attributes.length;
            
            if(attrLength) {
              wrapper.innerHMTL = tmpl;
              document.querySelector("#app");
              
              
              if(attrLength > 1) {
                modal.showNavigation = true;
              }
              if(modal.header.trim() !== '') {
                modal.showHeader = true;
              }
              if(modal.footer.trim() !== '') {
                modal.showFooter = true;
              }
            }
            if(modalCount == 1) {
              $app.appendChild(wrapper);
              document.querySelector("#modal a.btn-close").addEventListener("click", function() {
                document.querySelector("#modal").classList.remove("show");
              });
              var $prev = document.querySelector("a.btn-previous");
              var $next = document.querySelector("a.btn-next");
              $prev.addEventListener("click", function (event) {
                var modalAttributes = document.querySelectorAll('[data-modal]');
                
                var thisModalAttr = modalAttributes.length;
                if(currentIndex == 0) {
                  currentIndex = thisModalAttr-1
                  document.querySelector(".modal-content img").src = modalAttributes[currentIndex].getAttribute("data-modal");
                }else {
                  document.querySelector(".modal-content img").src = modalAttributes[currentIndex-=1].getAttribute("data-modal");
                }
              });
              $next.addEventListener("click", function (event) {
                var modalAttributes = document.querySelectorAll('[data-modal]');
                var thisModalAttr = modalAttributes.length;
                var actualLength = thisModalAttr-1;
                if(currentIndex == actualLength) {
                  currentIndex = 0
                  document.querySelector(".modal-content img").src = modalAttributes[currentIndex].getAttribute("data-modal");
                }else {
                  document.querySelector(".modal-content img").src = modalAttributes[currentIndex+=1].getAttribute("data-modal");
                }
              });
              document.querySelector("#modal").addEventListener("click", function(event) {
                if(event.target.id == "modal"){
                  document.querySelector("#modal").classList.remove("show");
                }
              });
            }
        },1000);
    }
}
Vue.directive("modal-box", modalBox)