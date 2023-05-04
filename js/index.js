var diqu = document.querySelector('.diqu1');
var diqu1s = diqu.querySelectorAll("span");
// 获取地区的文本内容
var area = document.querySelector('.area').querySelector('span').querySelector('i');
// console.log(area);

for( var i=0;i<diqu1s.length;i++ )
{
    // 给每一个span添加鼠标点击事件
    diqu1s[i].addEventListener('click',function()
    {
        // 在点击事件里面i已经走完 35 此时i = 35 console.log(i)
        // console.log(this); this指向绑定事件的元素-> diqu1s[i]
        for( var c=0;c<diqu1s.length;c++ )
        {
            // 如果this匹配再次循环的diqu1s[c]则修改类名和地区名
            // 也就是点击的内容和循环到的内容一致  35次一定有匹配的
            if( this===diqu1s[c] )
            {
                console.log(this)
                diqu1s[c].className = 'turn';
                area.innerText = diqu1s[c].innerText;
            }
            else
            {
                diqu1s[c].className = '';
            }
        }
    })
}
// 实现模糊查询
let hotWords = document.querySelector('.hotWords'); //获取输入框
let searcHelper = document.querySelector('.search-helper'); //获取下拉列表

// 定义数组，存储搜索内容
let searchArr = ['小米手机','华为手机','苹果手机','小米电视','小米平板','苹果12','苹果13','iphone14','春节','送礼','新年礼物','抗疫物资','N95口罩'];

// 给输入框绑定内容改变事件
hotWords.addEventListener('input',function()
{
    // 清除之前的内容
    searcHelper.innerHTML = '';
    for( let i=0;i<searchArr.length;i++ )
    {
        if( searchArr[i].indexOf(hotWords.value)!= -1 )
        {
            searcHelper.innerHTML += `<p>${searchArr[i]}</p>`
            searcHelper.style.display = 'block';
        }
    }
})

hotWords.addEventListener('blur',function()
{
    searcHelper.style.display = 'none';
})


// 定时切换输入框关键字
let index = 0;
setInterval(function()
{
    index++;
    // 范围校验 
    if( index>searchArr.length-1 )
    {
        index = 0;
    }
    // 设置placeholder属性
    hotWords.placeholder = searchArr[index];
},3000)



// 定义热搜词的定时切换数组
var hotC = document.querySelector('.hot_change');
(function()
{
    let hotChange = ['增强免疫力','手机新年礼','防疫物资','打篮球'];
    let indexTwo = 0;
    let change = setInterval(function()
    {
        indexTwo++
        if( indexTwo>hotChange.length-1 )
        {
            indexTwo = 0;
        }
        hotC.innerText = hotChange[indexTwo];
    },2000)
})();


// 轮播图


var imgs = document.querySelector('.imgs');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var lis = document.querySelectorAll('.curent_container>li');
// 定义一个数组来保存图片的名称
let imgArr = ['1.avif','2.avif','3.avif','4.jpg','5.avif','6.avif','7.avif','8.jpg'];

    let ind = 0;
    // 切换图片
function banner()
{
    for( let k=0;k<lis.length;k++ )
        {
            lis[k].className = '';
        }

    imgs.src = "./images/"+imgArr[ind];
    lis[ind].className = 'current';
}

// 这个函数就是做轮播图片切换
function autoBanner()
{
    ind++;
    //第一次默认第0张 imgArr长度为8 0-7可以走完 所以-1
    if( ind>imgArr.length-1 )
    {
        ind = 0;
    }
    banner();
    // console.log(ind);
}

// 设置一个周期定时器，每隔三秒调用一下自动轮播
let timer = setInterval(autoBanner,3000);

// 鼠标移入停止轮播
var coreInner = document.querySelector('.core_inner');
coreInner.addEventListener('mouseover',function()
{
    clearInterval(timer);
})
coreInner.addEventListener('mouseout',function()
{
    timer = setInterval(autoBanner,3000);
})
// 小箭头
// 点击切换上一个图片箭头
prev.addEventListener('click',function()
{
    ind--;
    if( ind<0 )
    {
        ind = imgArr.length-1;
    }
    // console.log(ind);
    banner();
})
// 点击切换下一个图片箭头
next.addEventListener('click',function()
{
    // 每点击一次数组下标就+1,调用切换图片函数时就会改变图片
    ind++;
    // 超过数组的长度则重置
    if( ind>imgArr.length-1 )
    {
        ind = 0;
    }
    // console.log(ind);
    banner();
})

// 小圆点！！
for( let j=0;j<lis.length;j++ )
{
    lis[j].addEventListener('click',function()
    {
        ind = j;
        banner();
    })
}

// 鼠标移入改变图片颜色
(function()
{
    // let两个数组存放前后图片名称以便更换
    let serviceImgArr1 = ['s1.png','s2.png','s3.png','s4.png','s5.png','s6.png','s7.png','s8.png','s9.png','s10.png','s11.png','s12.png'];
    let serviceImgArr2 = ['service1.png','service2.png','service3.png','service4.png','service5.png','service6.png','service7.png','service8.png','service9.png','service10.png','service11.png','service12.png'];
    var sImgs = document.querySelectorAll('.service_item img');
    for( let i=0;i<sImgs.length;i++ )
    {
        sImgs[i].addEventListener('mouseenter',function()
        {
            for( let j=0;j<sImgs.length;j++ )
            {
                if( this===sImgs[j] )
                {
                    sImgs[j].src = './images/'+serviceImgArr1[j];
                }
            }
        })
        sImgs[i].addEventListener('mouseleave',function()
        {
            for( let j=0;j<sImgs.length;j++ )
            {
                if( this===sImgs[j] )
                {
                    sImgs[j].src = './images/'+serviceImgArr2[j];
                }
            }
        })
    }
})();


// 京东秒杀
let timeHour = document.querySelector('.timer-unit-hour');
let timeMinute = document.querySelector('.timer-unit-minute');
let timeSecond = document.querySelector('.timer-unit-second');
// 获取当前系统时间
countTime();
let countTimer = setInterval(countTime,1000)
function countTime()
{
    var now  = new Date();
    // 获取目标时间
    var end = new Date('2023/12/20');
    // console.log(now);
    var s = parseInt((end-now)/1000);  //转为毫秒数
    // console.log(s); 
    if( s>0 )
    {
        // var t = parseInt(s/(24*60*60)); //1天 = 24*60*60
        var x = parseInt((s%(24*60*60))/3600); //不足一天的秒数算小时
        var f = parseInt((s%3600)/60); //不足一小时的算分钟
        var m = s%60; //秒数
        // tian.innerHTML = t>=10 ? t:'0'+t;
        timeHour.innerHTML = x>=10 ? x:'0'+x;
        timeMinute.innerHTML = f>=10 ? f:'0'+f;
        timeSecond.innerHTML = m>=10 ? m:'0'+m;
    }
    else
    {
        console.log('秒杀结束');
    }
}

// 楼层效果
let aside = document.querySelector('.aside_list');
let headerTop = document.querySelector('.header');
let navTop = document.querySelector('.headerone');
let lunboTop = document.querySelector('.gird_container');
// 获取侧边栏的小方块
let square = document.querySelectorAll('.aside_list>a');
// 给所有需要取出高度的元素添加changeTop样式并获取元素 这个用来取元素距离浏览器上边沿高度
let changeTop = document.querySelectorAll(".changeTop");
// 拎出来元素距离offset
let changeOffset = headerTop.offsetHeight + navTop.offsetHeight + lunboTop.offsetHeight+40;
console.log(changeOffset);
console.log(changeTop.length);
// 声明一个存放距离的数组
let floor = [];
// 拿到几个高度
for( let i=0;i<changeTop.length;i++ )
{
    changeOffset += changeTop[i].offsetHeight;
    // console.log(changeOffset);
    // console.log(changeTop[i]);
    // 将数组挨个存放进去
    floor.push(changeOffset);
}
console.log(floor);
//  给页面绑定滚动事件
window.addEventListener('scroll',function()
{
    // 获取滚动条距上面的距离
    let top  = this.document.documentElement.scrollTop || this.document.body.scrollTop;
    // 获取秒杀元素距离距离上边沿的距离
    let seckillDistance = headerTop.offsetHeight + navTop.offsetHeight + lunboTop.offsetHeight + 40;
    // console.log(seckillDistance);
    if( top>=seckillDistance )
    {
        aside.className = 'aside_fixed aside_list';
    }
    else
    {
        aside.className = 'aside_list';
    }
    // console.log(top)
    // 楼层效果
    
    function clear()
    {
        for( let i=0;i<floor.length;i++ )
        {
            square[i].style.color = '';
        }
    }
    // 判断top距离上边沿的距离，对应的侧边栏修改字体颜色
    if( top>=seckillDistance&&top<=floor[0] )
    {
        clear();
        square[0].style.color = '#e1251b';
    }
    else if( top>=floor[0]&&top<=floor[1])
    {
        clear();
        square[1].style.color = '#e1251b';
    }
    else if( top>=floor[1]&&top<=floor[2])
    {
        clear();
        square[2].style.color = '#e1251b';
    }
    else if( top>=floor[2]&&top<=floor[3])
    {
        clear();
        square[3].style.color = '#e1251b';
    }
    else 
    {
        clear();
    }

    // 吸顶效果
    let search = this.document.querySelector('.search');
    let searchM= this.document.querySelector('.search-m');
    let smallCar= this.document.querySelector('.smallCar');
    let forms = this.document.querySelector('.form');
    let searchLogo = this.document.querySelector('.search_logo');
    if( top>(seckillDistance-62) )
    {
        search.className = 'search search_fix';
        searchM.style.height = '50px';
        forms.style.top = '8px';
        forms.style.left = '550px';
        smallCar.style.top = '8px';
        smallCar.style.right = '650px';
        searchLogo.style.display = 'block';
    } 
    else 
    {
        search.className = 'search';
        searchM.style.height = '60px';
        forms.style.top = '25px';
        forms.style.left = '260px';
        smallCar.style.top = '25px';
        smallCar.style.right = '240px';
        searchLogo.style.display = 'none';
    }
})


// 添加鼠标悬停效果
for( let i=0;i<square.length;i++ )
{
    square[i].onmouseenter = function()
    {
        square[i].style.backgroundColor = '#e1251b';
        square[i].style.color = '#fff'
    }
    square[i].onmouseleave = function()
    {
        square[i].style.backgroundColor = '#fff';
        square[i].style.color = '#000'
    }
}

// 鼠标移入切换选项卡
var tabItems = document.querySelectorAll('.tab_link .item');
// console.log(tabItems); 
// 清空样式
function clearStyle()
{
    for( let i=0;i<tabItems.length;i++ )
    {
        tabItems[i].className = 'item';
    }
}
for( let i=0;i<tabItems.length;i++ )
{
    tabItems[i].addEventListener('mouseenter',function()
    {
        for( let j=0;j<tabItems.length;j++ )
        {
            if( this==tabItems[j] )
            {
                clearStyle();
                tabItems[j].className = 'item cur_style';
                clearInterval(tabTimer);
            }
        }
    })
    tabItems[i].addEventListener('mouseleave',function()
    {
        for( let j=0;j<tabItems.length;j++ )
        {
            if( this==tabItems[j] )
            {
                tabTimer = setInterval(tabChange,2000);
            }
        }
    })

} 

// 定时切换选项卡
// 将获取到的四个选项卡标题赋值给数组tabArr
let tabArr = tabItems;
let tabIndex = 0;
console.log(tabArr);
let tabTimer = setInterval(tabChange,2000);
function tabChange()
{
    clearStyle();
    tabIndex ++;
    if( tabIndex>tabArr.length-1 )
    {
        clearStyle();
        tabIndex = 0;
        tabArr[tabIndex].className = 'item cur_style';
    }
    // 赋值顺序很重要！！                                                      
    tabArr[tabIndex].className = 'item cur_style';
    console.log(tabIndex);
}
