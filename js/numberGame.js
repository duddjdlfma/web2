const form = document.getElementById("form1");
const input = document.querySelector("input");
const prev = document.querySelector("#prev > span");
const answer = document.querySelector("#answer");
const result = document.querySelector("#result");
const rere = document.querySelector("#rere");
const btn = document.querySelector("#btn");

let num = new Array();
let i = 0;

const random = Math.floor(Math.random()*100);

function asd(e){
    e.preventDefault();
    const regex = /^[0-9]*$/; // 정규표현식 숫자만
    let v = input.value.replace(/,/g, " ");
    let flag = regex.test(v); //내가 입력한 값이 숫자인지 아닌지 확인

    if(flag){// 숫자면 실행
        if(v == "" || v == null || v == undefined){
            alert('숫자를 입력해주세요.');
        }else if(v > 100){
            alert("1과 100 사이의 숫자만 입력해주세요.");
        }else if(v < 1){
            alert("1과 100 사이의 숫자만 입력해주세요.");
        }else{
            prev.parentNode.classList.remove("hideen");
            answer.classList.remove("hideen");
            result.classList.remove("hideen");

            // num[i] = JSON.parse(v); //입력 값을 object로 변환하고 num배열에 넣음
            num[i] = v;
            i++; //i를 증가해서 배열 순서를 차례로 넣음
            prev.innerText = num; //입력값을 차례로 저장

            if(random == v){//랜덤 숫자와 입력 값이 같으면
                answer.innerText ="Congratulations! You got it right!";//answer 텍스트를 정답으로
                answer.style.background="green"; //배경색을 초록색으로 변경
                stop();//stop 함수 실행
            }else{ // 그게 아니라면
                answer.innerText ="Wrong!"; // answer 텍스트를 틀렸다고,
                answer.style.background="red"; // 배경색을 빨간색으로 변경
            }
            if(v < random){ //입력 값보다 랜덤숫자가 크다면
                result.innerText = "Last guess was too low!";// 입력한 숫자가 너무 낮다고 힌트.
            }else if(v > random){// 입력 값보다 랜덤숫자가 작다면
                result.innerText = "Last guess was too high!";// 입력한 숫자가 너무 크다고 힌트.
            }else{//입력 값이 정답과 같다면
                result.innerHTML = "";// 숨김
            }
        }

    }else{// 숫자를 제외한 다른 문자면 실행
        alert('숫자를 입력해주세요.');
    }
    input.value = "";// input 값 초기화
    if(i === 10){// i가 10이면 종료
        stop();//stop 함수 실행
        answer.innerText ="!!!GAME OVER!!!";// 텍스트 값을  끝났다고 변경 
    }
// 이전 값 기록
}
function stop(){
    // alert("게임 종료");
    input.setAttribute( 'disabled', 'disabled' );
    btn.setAttribute( 'disabled', 'disabled' ); // input과 버튼을 비활성화
    rere.classList.remove("hideen"); //다시하기 버튼을 보여지게 함
    rere.addEventListener("click", reload); // 새로고침 함수 실행
}

function reload(){
    window.location.reload(); // 페이지 새로고침

}

form.addEventListener("submit", asd); // 버튼을 누르면 함수 실행














