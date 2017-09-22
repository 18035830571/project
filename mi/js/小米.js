


window.onload=function(){
//侧导航
	let aside=document.getElementsByTagName('aside')[0];
	let li=aside.getElementsByClassName('li');

	
	for(let i=0;i<li.length;i++){
		li[i].onmouseenter=function(){
			let items =this.getElementsByClassName('cebian')[0];
			items.style.display='block';

		}
		li[i].onmouseleave=function(){
			let items=this.getElementsByClassName('cebian')[0];
			items.style.display='none';
		}
	}
//头部
    let hehe=document.getElementsByClassName('hehe')[0];
    let shouji=hehe.getElementsByClassName('haha');
    for(let i=0;i<shouji.length;i++){
    	shouji[i].onmouseenter=function(){
    		let innerxiaomi=this.getElementsByClassName('innerxiaomi')[0];
    		innerxiaomi.style.display='block';
    	}
    	shouji[i].onmouseleave=function(){
    		let innerxiaomi=this.getElementsByClassName('innerxiaomi')[0];
    		innerxiaomi.style.display='none';
    	}
    }
//搜索栏
    let nav2li=document.getElementsByClassName('nav2li')[0] ;
    let sousuo=document.getElementsByClassName('sousuo')[0];
    let mr=document.getElementsByClassName('mr')[0];
    sousuo.onclick=function(){
    	mr.classList.add('none');
    	nav2li.classList.add('block');
    }
    sousuo.onblur=function(){
    	mr.classList.remove('none');
    	nav2li.classList.remove('block');
    }
   
//2（错）
	// let aside =document.getElementsByTagName('aside')[0];
	// let li =aside.getElementsByTagName('li');
	// let items=document.getElementsByClassName('cebian')[0];
	// for(let i=0;i<li.length;i++){
	// 	console.log(i)
		
	// 	li[i].onmouseenter=function(){
	// 	items[i].style.display='block';	
	// 	}
	// 	li[i].onmouseleave=function(){
	// 	items[i].style.display='none';
	// 	}
	// }
	
//3
	// let aside =document.getElementsByTagName('aside')[0];
	// let li =aside.getElementsByTagName('li');
	// let items=document.getElementsByClassName('cebian')[0];
	// for(var i=0;i<li.length;i++){
	// 	console.log(i)
		
	// 	li[i].onmouseenter=function(){
		
	// 	items.classList.add('block');
	// 	items.classList.remove('none');
	// 	// items.classList.toggle('block')
	// 	}
	// 	li[i].onmouseleave=function(){
	// 	items.classList.add('none');
	// 	items.classList.remove('block');
	// 	// items.classList.toggle('block')
	// 	}
	// }
	
//点1轮播
	let boximg=document.getElementsByClassName('boximg')[0];
    let lis=boximg.getElementsByTagName('li');
    let br=document.getElementsByClassName('dian')[0];
    let dian=br.getElementsByTagName('li');
    for(let i=0;i<dian.length;i++){
    	dian[i].onclick=function(){
    	for(let j=0;j<lis.length;j++){
    		lis[j].classList.add('none');
    		lis[j].classList.remove('block');
    		dian[j].style.background=' rgba(0,0,0,0.5)'
    	}
    	lis[i].classList.add('block');
    	this.style.background=' #EAD1C2';
    }
}


//点2(错)
	// let boximg=document.getElementsByClassName('boximg')[0];
 //    let lis=boximg.getElementsByTagName('li');
 //    let br=document.getElementsByClassName('dian')[0];
 //    let dian=br.getElementsByTagName('li');
 //    let num =0;
 //    for(i=0;i<dian.length;i++){
 //    	dian[i].onclick=function(){
 //    		lis[num].style.display='none';
 //    		lis[i].style.display='block';
 //    		num=i;
 //    	}
 //    	console.log(i);
 //    	// console.log(num);
 //    }
 

 //自动轮播
 	let bmg=document.getElementsByClassName('boximg')[0];
    let lis1=bmg.getElementsByTagName('li');
    let br1=document.getElementsByClassName('dian')[0];
    let dian1=br1.getElementsByTagName('li');
    let forward=document.getElementsByClassName('huan-left')[0];
    let back=document.getElementsByClassName('huan-right')[0];
    let num0 =0;
    let t;
    t=setInterval(fn,4000);
    function fn(){
			num0++;
			if(num0==lis1.length){
				num0=0;
			}
			for(let i=0;i<lis1.length;i++){
				lis1[i].style.display='none';
				dian1[i].style.background='gray';
			}
			lis1[num0].style.display='block';
			dian1[num0].style.background='white';

		}
	function fn1(){
		num0--;
			if(num0==-1){
				num0=lis1.length-1;
			}
			for(let i=0;i<lis1.length;i++){
				lis1[i].style.display='none';
				dian1[i].style.background='gray';
			}
			lis1[num0].style.display='block';
			dian1[num0].style.background='white';
	}	
//两侧轮播
    forward.onclick=fn;
    back.onclick=fn1;


// 	$(function(){
// 	let banner=$('.boximg')[0];
// 	let lis=$('li',banner);
// 	let width=banner.offsetWidth;
// 	let t;
// 	let now=0,next=0;
// 	t =setInterval(function(){
// 		move();
// 	},2000);
	
// 	function move(){
// 		next++;
// 		if(next==lis.length){
// 			next=0;
// 		}
// 		lis[next].style.left=`${width}px`;
// 		animate(lis[now],{left:-width});
// 		animate(lis[next],{left:0});
// 		now=next;
// 	}	
// });

//明星单品轮播
let oneicon=document.getElementsByClassName('oneicon')[0];
let twoicon=document.getElementsByClassName('twoicon')[0];
let tentu=document.getElementsByClassName('tentu')[0];
let count=tentu.childElementCount;
let size=tentu.children[0].offsetWidth;
let width=`${count*size}px`;
// let t1;
let num=0;
oneicon.onclick=function(){
	if(num==3){
		return;
	}
	num++;
   tentu.style.marginLeft=`${-num*1226}px`;
}
twoicon.onclick=function(){
	if(num==0){
		return;
	}
	num--;
   tentu.style.marginLeft=`${-num*1226}px`;
}
//  t1=setInterval(fn,1000);
//  function fn2(){
 	
//  	if(num==3){
//  		return;
//  	}
//  	num++;
//  	tentu.style.marginLeft=`${-num*1226}px`;
//  }
// console.log(t1)

//为你推荐轮播
let oneicon1=document.getElementsByClassName('oneicon')[1];
let twoicon1=document.getElementsByClassName('twoicon')[1];
let tentu1=document.getElementsByClassName('tentu')[1];
let count1=tentu1.childElementCount;
let size1=tentu1.children[0].offsetWidth;
let width1=`${count1*size1}px`;

tentu1.style.width1=`${count1*size1}px`;
let num1=0;
oneicon1.onclick=function(){
	if(num1==3){
		return;
	}
	num1++;
   tentu1.style.marginLeft=`${-num1*1226}px`;
}
twoicon1.onclick=function(){
	if(num1==0){
		return;
	}
	num1--;
   tentu1.style.marginLeft=`${-num1*1226}px`;
}
//家电
let jiadian=document.querySelectorAll('.jiadian1-right>ul>li');
let jiadian3=document.getElementsByClassName('jiadian3');
for(let i=0;i<jiadian.length;i++){
	jiadian[i].onmouseenter=function(){
		for(let j=1;j<jiadian3.length;j++){
    		jiadian3[j].classList.add('none');
    		jiadian3[j].classList.remove('block');
    		
    	}
    	jiadian3[i].classList.add('block');
    	console.log(jiadian)
    	console.log(jiadian3)
	}
}

//图书
let neironglun=document.querySelectorAll('.neironglun');
let cczuo=document.querySelectorAll('.cczuo');
let ccyou=document.querySelectorAll('.ccyou');
let num3=0;
let t2;
    t2=setInterval(fn,1000);
    function fn2(){
			num3++;
			if(num3==neironglun.length){
				num3=0;
			}
			for(let i=0;i<neironglun.length;i++){
				neironglun[i].style.display='none';
				// dian1[i].style.background='gray';
			}
			neironglun[num3].style.display='block';
			// dian1[num0].style.background='white';

		}
	function fn3(){
		num3--;
			if(num3==-1){
				num0=neironglun.length-1;
			}
			for(let i=0;i<neironglun.length;i++){
				neironglun[i].style.display='none';
				// dian1[i].style.background='gray';
			}
			neironglun[num3].style.display='block';
			// dian1[num0].style.background='white';
	}	
	cczuo.onclick=fn2;
	ccyou.onclick=fn3;
}