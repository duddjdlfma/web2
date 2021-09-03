const quotes = [
    {
        quote:"우리는 받아서 삶을 꾸려나가고 주면서 인생을 꾸며나간다.",
        author: "윈스턴 처칠",
    },
    {
        quote:"늘 행복하고 지혜로운 사람이 되려면 자주 변해야 한다.",
        author:"공자"
    },
    {
        quote:"여행은 되돌아 보았을 때에만 매력적이다.",
        author:"폴 서룩스"
    },
    {
        quote:"인생은 3막이 고약하게 쓰여진 조금 괜찮은 연극이다.",
        author:"트루먼 카포트"
    },
    {
        quote:"인생에는 서두르는 것 말고도 더 많은 것이 있다.",
        author:"마하트마 간디"
    },
    {
        quote:"자신이 어떻게 변해왔는지 알려면 변하지 않은 곳으로 돌아가는 것보다 더 좋은 방법은 없다.",
        author:"넬슨 만델라"
    },
    {
        quote:"삶은 공평하지 않다. 다만 죽음보다는 공평할 뿐이다.",
        author:"윌리엄 골드먼"
    },
    {
        quote:"어른이 된다는 것은 사춘기로부터의 일시적 휴식에 불과하다.",
        author:"줄스 파이퍼"
    },
    {
        quote:"젊음은 희망을 빨리 갖기 때문에 그만큼 쉽게 현혹된다.",
        author:"아리스토텔레스"
    },
    {
        quote:"인생은 과감한 모험이던가, 아니면 아무 것도 아니다",
        author:"헬렌 켈러"
    },];

    const random = quotes[Math.floor(Math.random()*quotes.length)];

    const quote = document.querySelector(".hero p");
    const author = document.querySelector(".hero span");

    quote.innerText = random.quote;
    author.innerText = random.author;















