import {
  debounceTime,
  take,
  repeat,
  map,
  mapTo,
  scan,
  buffer,
  bufferTime,
  bufferCount,
  concatMap,
  switchMap,
  filter,
  first,
  last,
  skip,
  takeUntil,
  takeLast,
  throttleTime,
  distinct,
  distinctUntilChanged,
  startWith,
  withLatestFrom,
  delay,
  delayWhen,
  multicast
} from 'rxjs/operators';
import { Component, AfterViewInit } from '@angular/core';
import { of, zip, range, interval, timer, merge, fromEvent, concat, combineLatest, Subject, from } from 'rxjs';
@Component({
  templateUrl: './operators.component.html',
  styleUrls: ['operators.component.scss']
})
export class OperatorsComponent implements AfterViewInit {
  demi1FromResult = '';
  demi1OfResult = '';
  demo1() {
    this.demi1FromResult = '';
    this.demi1OfResult = '';
    from([1, 2, 3]).subscribe(value => {
      this.demi1FromResult += value + ' ';
    });
    of(1, 2, 3).subscribe(value => {
      this.demi1OfResult += value + ' ';
    });
  }
  code1 = `
    demi1FromResult = '';
    demi1OfResult = '';
    demo1() {
        this.demi1FromResult = '';
        this.demi1OfResult = '';
        from([1, 2, 3]).subscribe(value => {
            this.demi1FromResult += value + ' ';
        });
        of(1, 2, 3).subscribe(value => {
            this.demi1OfResult += value + ' ';
        });
    }
    `;
  demo2Result = '';
  demo2() {
    interval(1000)
      .pipe(take(5))
      .subscribe(value => {
        this.demo2Result += value + ' ';
      });
  }
  code2 = `
    demo2Result = '';
    demo2() {
        interval(1000).pipe(take(5)).subscribe(value => {
            this.demo2Result += value + ' ';
        });
    }
    `;
  demo3Result = '';
  demo3() {
    this.demo3Result = '';
    of(1, 2, 3)
      .pipe(repeat(2))
      .subscribe(value => {
        this.demo3Result += value + ' ';
      });
  }
  code3 = `
    demo3Result = '';
    demo3() {
        this.demo3Result = '';
        of(1, 2, 3).pipe(repeat(2)).subscribe(value => {
            this.demo3Result += value + ' ';
        });
    }
    `;
  demo4Result = '';
  demo4() {
    this.demo4Result = '';
    range(3, 5).subscribe(value => {
      this.demo4Result += value + ' ';
    });
  }
  code4 = `
    demo4Result = '';
    demo4() {
        this.demo4Result = '';
        range(3, 5).subscribe(value => {
            this.demo4Result += value + ' ';
        });
    }
    `;
  demo5Result = '';
  demo5() {
    this.demo5Result = '';
    //延时0.5秒执行,之后每次间隔1秒发送值
    timer(500, 1000)
      .pipe(take(5))
      .subscribe(value => {
        this.demo5Result += value + ' ';
      });
  }
  code5 = `
    demo5Result = '';
    demo5() {
        this.demo5Result = '';
        //延时0.5秒执行,之后每次间隔1秒发送值
        timer(500, 1000).pipe(take(5)).subscribe(value => {
            this.demo5Result += value + ' ';
        });
    }
    `;
  demo6Result = '';
  demo6() {
    this.demo6Result = '';
    of(1, 2, 3)
      .pipe(map(x => x * 10))
      .subscribe(value => {
        this.demo6Result += value + ' ';
      });
  }
  code6 = `
    demo6Result = '';
    demo6() {
        this.demo6Result = '';
        of(1, 2, 3).pipe(map(x => x * 10)).subscribe(value => {
            this.demo6Result += value + ' ';
        });
    }
    `;
  demo7Result = '';
  demo7() {
    this.demo7Result = '';
    of(1, 2, 3)
      .pipe(mapTo('Eve'))
      .subscribe(value => {
        this.demo7Result += value + ' ';
      });
  }
  code7 = `
    demo7Result = '';
    demo7() {
        this.demo7Result = '';
        of(1, 2, 3).pipe(mapTo('Eve')).subscribe(value => {
            this.demo7Result += value + ' ';
        });
    }
    `;
  demo8Result = '';
  demo8() {
    this.demo8Result = '';
    of(1, 2, 3)
      .pipe(scan((accumulator, current) => accumulator + current, 10))
      .subscribe(value => {
        this.demo8Result += value + ' ';
      });
  }
  code8 = `
    demo8Result = '';
    demo8() {
        this.demo8Result = '';
        of(1, 2, 3).pipe(scan((accumulator, current) => accumulator + current, 10)).subscribe(value => {
            this.demo8Result += value + ' ';
        });
    }
    `;
  demo9Result = '';
  demo9() {
    this.demo9Result = '';
    const observable$1 = timer(0, 1000).pipe(take(5)); //    0 1 2 3 4
    const observable$2 = timer(2000, 2000).pipe(take(2)); //     0   1
    observable$1.pipe(buffer(observable$2)).subscribe(value => {
      this.demo9Result += value + ' ';
    });
  }
  code9 = `
    demo9Result = '';
    demo9() {
        this.demo9Result = '';
        const observable$1 = timer(0,1000).pipe(take(5));//    0 1 2 3 4
        const observable$2 = timer(2000,2000).pipe(take(2));//     0   1
        observable$1.pipe(buffer(observable$2)).subscribe(value => {
            this.demo9Result += value + ' ';
        });
    }
    `;
  demo10Result = '';
  demo10() {
    this.demo10Result = '';
    timer(0, 1000)
      .pipe(bufferTime(2000))
      .subscribe(value => {
        this.demo10Result += value + ' ';
      });
  }
  code10 = `
    demo10Result = '';
    demo10() {
        this.demo10Result = '';
        timer(0, 1000).pipe(bufferTime(2000)).subscribe(value => {
            this.demo10Result += value + ' ';
        });
    }
    `;
  demo11Result = '';
  demo11() {
    this.demo11Result = '';
    timer(0, 1000)
      .pipe(bufferCount(3))
      .subscribe(value => {
        this.demo11Result += value + ' ';
      });
  }
  code11 = `
    demo11Result = '';
    demo11() {
        this.demo11Result = '';
        timer(0, 1000).pipe(bufferCount(3)).subscribe(value => {
            this.demo11Result += value + ' ';
        });
    }
    `;
  demo12Result = '';
  demo12() {
    this.demo12Result = '';
    timer(0, 5000)
      .pipe(concatMap(i => timer(0, 1000).pipe(take(5))))
      .subscribe(value => {
        this.demo12Result += value + ' ';
      });
  }
  code12 = `
    demo12Result = '';
    demo12() {
        this.demo12Result = '';
        timer(0,5000).pipe(concatMap(i => timer(0,1000).pipe(take(5)))).subscribe(value => {
            this.demo12Result += value + ' ';
        });
    }
    `;
  demo13Result = '';
  demo13() {
    this.demo13Result = '';
    timer(0, 4000)
      .pipe(switchMap(i => timer(0, 1000).pipe(take(5))))
      .subscribe(value => {
        this.demo13Result += value + ' ';
      });
  }
  code13 = `
    demo13Result = '';
    demo13() {
        this.demo13Result = '';
        timer(0,4000).pipe(switchMap(i => timer(0,1000).pipe(take(5)))).subscribe(value => {
            this.demo13Result += value + ' ';
        });
    }
    `;
  demo14Result = '';
  demo14() {
    this.demo14Result = '';
    of(1, 2, 3, 4, 5, 6)
      .pipe(filter(x => x % 2 === 0))
      .subscribe(value => {
        this.demo14Result += value + ' ';
      });
  }
  code14 = `
    demo14Result = '';
    demo14() {
        this.demo14Result = '';
        of(1, 2, 3, 4, 5, 6).pipe(filter(x => x % 2 === 0)).subscribe(value => {
            this.demo14Result += value + ' ';
        });
    }
    `;
  demo15Result = '';
  demo16Result = '';
  demo17Result = '';
  demo15() {
    this.demo15Result = '';
    this.demo16Result = '';
    this.demo17Result = '';
    of(1, 2, 3, 4, 5, 6)
      .pipe(first())
      .subscribe(value => {
        this.demo15Result += value + ' ';
      });
    of(1, 2, 3, 4, 5, 6)
      .pipe(first(x => x % 2 === 0))
      .subscribe(value => {
        this.demo16Result += value + ' ';
      });
    of(1, 2, 3, 4, 5, 6)
      .pipe(first(x => x > 100, 100))
      .subscribe(value => {
        this.demo17Result += value + ' ';
      });
  }
  code15 = `
    demo15Result = '';
    demo16Result = '';
    demo17Result = '';
    demo15() {
        this.demo15Result = '';
        this.demo16Result = '';
        this.demo17Result = '';
        of(1, 2, 3, 4, 5, 6).pipe(first()).subscribe(value => {
            this.demo15Result += value + ' ';
        });
        of(1, 2, 3, 4, 5, 6).pipe(first(x => x % 2 === 0)).subscribe(value => {
            this.demo16Result += value + ' ';
        });
        of(1, 2, 3, 4, 5, 6).pipe(first(x => x > 100, 100)).subscribe(value => {
            this.demo17Result += value + ' ';
        });
    }
    `;
  demo18Result = '';
  demo19Result = '';
  demo20Result = '';
  demo18() {
    this.demo18Result = '';
    this.demo19Result = '';
    of(1, 2, 3, 4, 5, 6)
      .pipe(last())
      .subscribe(value => {
        this.demo18Result += value + ' ';
      });
    of(1, 2, 3, 4, 5, 6)
      .pipe(last(x => x % 2 !== 0))
      .subscribe(value => {
        this.demo19Result += value + ' ';
      });
    of(1, 2, 3, 4, 5, 6)
      .pipe(last(x => x % 2 > 100, 100))
      .subscribe(value => {
        this.demo20Result += value + ' ';
      });
  }
  code18 = `
    demo18Result = '';
    demo19Result = '';
    demo20Result = '';
    demo18() {
        this.demo18Result = '';
        this.demo19Result = '';
        of(1, 2, 3, 4, 5, 6).pipe(last()).subscribe(value => {
            this.demo18Result += value + ' ';
        });
        of(1, 2, 3, 4, 5, 6).pipe(last(x => x % 2 !== 0)).subscribe(value => {
            this.demo19Result += value + ' ';
        });
        of(1, 2, 3, 4, 5, 6).pipe(last(x => x % 2 > 100, 100)).subscribe(value => {
            this.demo20Result += value + ' ';
        });
    }
    `;
  demo21Result = '';
  demo21() {
    this.demo21Result = '';
    of(1, 2, 3, 4, 5, 6)
      .pipe(skip(3))
      .subscribe(value => {
        this.demo21Result += value + ' ';
      });
  }
  code21 = `
    demo21Result = '';
    demo21() {
        this.demo21Result = '';
        of(1, 2, 3, 4, 5, 6).pipe(skip(3)).subscribe(value => {
            this.demo21Result += value + ' ';
        });
    }
    `;
  demo22Result = '';
  demo22() {
    this.demo22Result = '';
    const notifier = timer(2000, 1000);
    timer(0, 1000)
      .pipe(takeUntil(notifier))
      .subscribe(value => {
        this.demo22Result += value + ' ';
      });
  }
  code22 = `
    demo22Result = '';
    demo22() {
        this.demo22Result = '';
        const notifier = timer(2000,1000);
        timer(0,1000).pipe(takeUntil(notifier)).subscribe(value => {
            this.demo22Result += value + ' ';
        });
    }
    `;
  demo23Result = '';
  demo23() {
    this.demo23Result = '';
    of(1, 2, 3, 4, 5, 6, 7, 8, 9)
      .pipe(takeLast(3))
      .subscribe(value => {
        this.demo23Result += value + ' ';
      });
  }
  code23 = `
    demo23Result = '';
    demo23() {
        this.demo23Result = '';
        of(1, 2, 3, 4, 5, 6, 7, 8, 9).pipe(takeLast(3)).subscribe(value => {
            this.demo23Result += value + ' ';
        });
    }
    `;
  demo24Result = '';
  demo25Result = '';
  ngAfterViewInit() {
    const demo24 = fromEvent(document.querySelector('#demo24'), 'keyup');
    demo24.pipe(debounceTime(1000)).subscribe(value => {
      this.demo24Result += '请求已发出! ';
    });
    const demo25 = fromEvent(document.querySelector('#demo25'), 'keyup');
    demo25.pipe(throttleTime(1000)).subscribe(value => {
      this.demo25Result += '请求已发出! ';
    });
  }
  code24 = `
    demo24Result = '';
    ngAfterViewInit() {
        const demo24 = fromEvent(document.querySelector('#demo24'), 'keyup');
        demo24.pipe(debounceTime(1000)).subscribe(value => {
            this.demo24Result += '请求已发出! ';
        });
    }
    `;
  code25 = `
    demo25Result = '';
    ngAfterViewInit() {
        const demo25 = fromEvent(document.querySelector('#demo25'), 'keyup');
        demo25.pipe(throttleTime(1000)).subscribe(value => {
            this.demo25Result += '请求已发出! ';
        });
    }
    `;
  demo26Result = '';
  demo26() {
    this.demo26Result = '';
    of(1, 1, 2, 2, 3, 4, 5, 5)
      .pipe(distinct())
      .subscribe(value => {
        this.demo26Result += value + ' ';
      });
  }
  code26 = `
    demo26Result = '';
    demo26() {
        this.demo26Result = '';
        of(1, 1, 2, 2, 3, 4, 5, 5).pipe(distinct()).subscribe(value => {
            this.demo26Result += value + ' ';
        });
    }
    `;
  demo27Result = '';
  demo28Result = '';
  demo27() {
    this.demo27Result = '';
    this.demo28Result = '';
    of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
      .pipe(distinctUntilChanged())
      .subscribe(value => {
        this.demo27Result += value + ' ';
      });
    of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
      .pipe(distinctUntilChanged((previous: number, next: number) => next - 1 === previous))
      .subscribe(value => {
        this.demo28Result += value + ' ';
      });
  }
  code27 = `
    demo27Result = '';
    demo28Result = '';
    demo27() {
        this.demo27Result = '';
        this.demo28Result = '';
        of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4).pipe(distinctUntilChanged()).subscribe(value => {
            this.demo27Result += value + ' ';
        });
        of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4).pipe(distinctUntilChanged((previous: number, next: number) => next - 1 === previous)).subscribe(value => {
            this.demo28Result += value + ' ';
        });
    }
    `;
  demo29Result = '';
  demo29() {
    this.demo29Result = '';
    const observable1 = interval(1000).pipe(take(4));
    const observable2 = interval(500).pipe(take(1));
    concat(observable1, observable2).subscribe(value => {
      this.demo29Result += value + ' ';
    });
  }
  code29 = `
    demo29Result = '';
    demo29() {
        this.demo29Result = '';
        const observable1 = interval(1000).pipe(take(4));
        const observable2 = of(4);
        concat(observable1, observable2).subscribe(value => {
            this.demo29Result += value + ' ';
        });
    }
    `;
  demo30Result = '';
  demo30() {
    this.demo30Result = '';
    of(1, 2, 3)
      .pipe(startWith(0))
      .subscribe(value => {
        this.demo30Result += value + ' ';
      });
  }
  code30 = `
    demo30Result = '';
    demo30() {
        this.demo30Result = '';
        of(1, 2, 3).pipe(startWith(0)).subscribe(value => {
            this.demo30Result += value + ' ';
        });
    }
    `;
  demo31Result = '';
  demo31() {
    this.demo31Result = '';
    const observable1 = timer(0, 1000).pipe(take(3));
    const observable2 = timer(1, 1000).pipe(take(3));
    merge(observable1, observable2).subscribe(value => {
      this.demo31Result += value + ' ';
    });
  }
  code31 = `
    demo31Result = '';
    demo31() {
        this.demo31Result = '';
        const observable1 = timer(0, 1000).pipe(take(3));
        const observable2 = timer(1, 1000).pipe(take(3));
        merge(observable1, observable2).subscribe(value => {
            this.demo31Result += value + ' ';
        });
    }
    `;
  demo32Result = '';
  demo32() {
    this.demo32Result = '';
    const observable1 = timer(1, 1000).pipe(take(3));
    const observable2 = timer(0, 999).pipe(take(3));
    combineLatest(observable1, observable2).subscribe(value => {
      this.demo32Result += value + ' ';
    });
  }
  code32 = `
    demo32Result = '';
    demo32() {
        this.demo32Result = '';
        const observable1 = timer(1, 1000).pipe(take(3));
        const observable2 = timer(0, 999).pipe(take(3));
        combineLatest(observable1, observable2).subscribe(value => {
            this.demo32Result += value + ' ';
        });
    }
    `;
  demo33Result = '';
  demo33() {
    this.demo33Result = '';
    const observable1 = of<number>(27, 25, 29);
    const observable2 = of<string>('a', 'b', 'c');
    zip(observable1, observable2).subscribe(value => {
      this.demo33Result += value + ' ';
    });
    zip(observable1, observable2, (age: number, name: string) => ({ age, name })).subscribe(value => {
      console.log(value); //打开控制台查看
    });
  }
  code33 = `
    demo33Result = '';
    demo33() {
        this.demo33Result = '';
        const observable1 = of<number>(27, 25, 29);
        const observable2 = of<string>('a', 'b', 'c');
        zip(observable1, observable2).subscribe(value => {
            this.demo33Result += value + ' ';
        });
        zip(observable1, observable2, (age: number, name: string) => ({ age, name })).subscribe(value => {
            console.log(value);//打开控制台查看
        });
    }
    `;
  demo34Result = '';
  demo35Result = '';
  demo34() {
    this.demo34Result = '';
    this.demo35Result = '';
    const observable1 = timer(1, 2000).pipe(take(4));
    const observable2 = timer(0, 1000).pipe(take(10));
    observable1.pipe(withLatestFrom(observable2)).subscribe(value => {
      this.demo34Result += value + ' ';
      //0 1 2 3 4 5 6 7 8 9 10(第x秒)
      //0   1   2   3         (observable1)
      //0 1 2 3 4 5 6 7 8 9 10(observable2)
    });
    observable1.pipe(withLatestFrom(observable2, (obs1, obs2) => obs1 + obs2)).subscribe(value => {
      this.demo35Result += value + ' ';
    });
  }
  code34 = `
    demo34Result = '';
    demo35Result = '';
    demo34() {
        this.demo34Result = '';
        this.demo35Result = '';
        const observable1 = timer(1, 2000).pipe(take(4));
        const observable2 = timer(0, 1000).pipe(take(10));
        observable1.pipe(withLatestFrom(observable2)).subscribe(value => {
            this.demo34Result += value + ' ';
            //0 1 2 3 4 5 6 7 8 9 10(第x秒)
            //0   1   2   3         (observable1)
            //0 1 2 3 4 5 6 7 8 9 10(observable2)
        });
        observable1.pipe(withLatestFrom(observable2, (obs1, obs2) => obs1 + obs2)).subscribe(value => {
            this.demo35Result += value + ' ';
        });
    }
    `;
  demo36Result = '';
  demo36() {
    this.demo36Result = '';
    of(1, 2, 3)
      .pipe(delay(1000))
      .subscribe(value => {
        this.demo36Result += value + ' ';
      });
  }
  code36 = `
    demo36Result = '';
    demo36() {
        this.demo36Result = '';
        of(1, 2, 3).pipe(delay(1000)).subscribe(value => {
            this.demo36Result += value + ' ';
        });
    }
    `;
  demo37Result = '';
  demo37() {
    this.demo37Result = '';
    of(1, 2, 3)
      .pipe(delayWhen(() => interval(Math.random() * 5000)))
      .subscribe(value => {
        this.demo37Result += value + ' '; //该案例可多次点击演示,每次发射的顺序不尽相同.
      });
  }
  code37 = `
    demo37Result = '';
    demo37() {
        this.demo37Result = '';
        of(1, 2, 3).pipe(delayWhen(() => interval(Math.random() * 5000))).subscribe(value => {
            this.demo37Result += value + ' ';//该案例可多次点击演示,每次发射的顺序不尽相同.
        });
    }
    `;
}
