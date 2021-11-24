import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-ultimo-passo',
  templateUrl: './ultimo-passo.page.html',
  styleUrls: ['./ultimo-passo.page.scss'],
})
export class UltimoPassoPage implements OnInit {

  isClickedBR: boolean = false;
  isClickedES: boolean = false;
  isClickedPT: boolean = false;
  isClickedUS: boolean = false;
  isClickedUK: boolean = false;
  isClickedIT: boolean = false;
  isClickedJP: boolean = false;

  showBtnBR: boolean = true;
  showBtnES: boolean = true;
  showBtnPT: boolean = true;
  showBtnUS: boolean = true;
  showBtnUK: boolean = true;
  showBtnIT: boolean = true;
  showBtnJP: boolean = true;

  showBR: boolean = false;
  showES: boolean = false;
  showPT: boolean = false;
  showUS: boolean = false;
  showUK: boolean = false;
  showIT: boolean = false;
  showJP: boolean = false;

  sp: boolean = false;
  bh: boolean = false;
  rj: boolean = false;
  cr: boolean = false;

  bc: boolean = false;
  vl: boolean = false;
  md: boolean = false;

  lb: boolean = false;
  cb: boolean = false;
  po: boolean = false;

  sf: boolean = false;
  lv: boolean = false;
  la: boolean = false;
  ny: boolean = false;
  ol: boolean = false;

  ld: boolean = false;
  lp: boolean = false;
  mc: boolean = false;

  rm: boolean = false;
  vn: boolean = false;
  ml: boolean = false;
  fr: boolean = false;

  tk: boolean = false;
  kt: boolean = false;
  hs: boolean = false;

  /*================================================================================================================*/

  isClickedBR1: boolean = false;
  isClickedES1: boolean = false;
  isClickedPT1: boolean = false;
  isClickedUS1: boolean = false;
  isClickedUK1: boolean = false;
  isClickedIT1: boolean = false;
  isClickedJP1: boolean = false;

  showBtnBR1: boolean = true;
  showBtnES1: boolean = true;
  showBtnPT1: boolean = true;
  showBtnUS1: boolean = true;
  showBtnUK1: boolean = true;
  showBtnIT1: boolean = true;
  showBtnJP1: boolean = true;

  showBR1: boolean = false;
  showES1: boolean = false;
  showPT1: boolean = false;
  showUS1: boolean = false;
  showUK1: boolean = false;
  showIT1: boolean = false;
  showJP1: boolean = false;

  sp1: boolean = false;
  bh1: boolean = false;
  rj1: boolean = false;
  cr1: boolean = false;

  bc1: boolean = false;
  vl1: boolean = false;
  md1: boolean = false;

  lb1: boolean = false;
  cb1: boolean = false;
  po1: boolean = false;

  sf1: boolean = false;
  lv1: boolean = false;
  la1: boolean = false;
  ny1: boolean = false;
  ol1: boolean = false;

  ld1: boolean = false;
  lp1: boolean = false;
  mc1: boolean = false;

  rm1: boolean = false;
  vn1: boolean = false;
  ml1: boolean = false;
  fr1: boolean = false;

  tk1: boolean = false;
  kt1: boolean = false;
  hs1: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  btnBR(){
    this.showBR = ! this.showBR;
    this.isClickedBR = ! this.isClickedBR;

    this.showES = false;
    this.isClickedES = false;
    this.showPT = false;
    this.isClickedPT = false;
    this.showUS = false;
    this.isClickedUS = false;
    this.showUK = false
    this.isClickedUK = false;
    this.showIT = false;
    this.isClickedIT = false;
    this.showJP = false;
    this.isClickedJP = false;
  }

  btnSP(){
    this.sp = ! this.sp;
    this.bh = false;
    this.rj = false;
    this.cr = false;
  }
  btnBH(){
    this.bh = ! this.bh;
    this.sp = false;
    this.rj = false;
    this.cr = false;
  }
  btnRJ(){
    this.rj = ! this.rj;
    this.sp = false;
    this.bh = false;
    this.cr = false;
  }
  btnCR(){
    this.cr = ! this.cr;
    this.sp = false;
    this.bh = false;
    this.rj = false;
  }

  btnES(){
    this.showES = ! this.showES;
    this.isClickedES = ! this.isClickedES;

    this.showBR = false;
    this.isClickedBR = false;
    this.showPT = false;
    this.isClickedPT = false;
    this.showUS = false;
    this.isClickedUS = false;
    this.showUK = false
    this.isClickedUK = false;
    this.showIT = false;
    this.isClickedIT = false;
    this.showJP = false;
    this.isClickedJP = false;
  }

  btnBC(){
    this.bc = ! this.bc;
    this.vl = false;
    this.md = false;
  }
  btnVL(){
    this.vl = ! this.vl;
    this.bc = false;
    this.md = false;
  }
  btnMD(){
    this.md = ! this.md;
    this.bc = false;
    this.vl = false;
  }

  btnPT(){
    this.showPT = ! this.showPT;
    this.isClickedPT = ! this.isClickedPT;

    this.showBR = false;
    this.isClickedBR = false;
    this.showES = false;
    this.isClickedES = false;
    this.showUS = false;
    this.isClickedUS = false;
    this.showUK = false
    this.isClickedUK = false;
    this.showIT = false;
    this.isClickedIT = false;
    this.showJP = false;
    this.isClickedJP = false;
  }

  btnLB(){
    this.lb = ! this.lb;
    this.cb = false;
    this.po = false;
  }
  btnCB(){
    this.cb = ! this.cb;
    this.lb = false;
    this.po = false;
  }
  btnPO(){
    this.po = ! this.po;
    this.lb = false;
    this.cb = false;
  }

  btnUS(){
    this.showUS = ! this.showUS;
    this.isClickedUS = ! this.isClickedUS;

    this.showBR = false;
    this.isClickedBR = false;
    this.showES = false;
    this.isClickedES = false;
    this.showPT = false;
    this.isClickedPT = false;
    this.showUK = false
    this.isClickedUK = false;
    this.showIT = false;
    this.isClickedIT = false;
    this.showJP = false;
    this.isClickedJP = false;
  }

  btnSF(){
    this.sf = ! this.sf;
    this.lv = false;
    this.la = false;
    this.ny = false;
    this.ol = false;
  }
  btnLV(){
    this.lv = ! this.lv;
    this.sf = false;
    this.la = false;
    this.ny = false;
    this.ol = false;
  }
  btnLA(){
    this.la = ! this.la;
    this.sf = false;
    this.lv = false;
    this.ny = false;
    this.ol = false;
  }
  btnNY(){
    this.ny = ! this.ny;
    this.sf = false;
    this.lv = false;
    this.la = false;
    this.ol = false;
  }
  btnOL(){
    this.ol = ! this.ol;
    this.sf = false;
    this.lv = false;
    this.la = false;
    this.ny = false;
  }

  btnUK(){
    this.showUK = ! this.showUK;
    this.isClickedUK = ! this.isClickedUK;

    this.showBR = false;
    this.isClickedBR = false;
    this.showES = false;
    this.isClickedES = false;
    this.showPT = false;
    this.isClickedPT = false;
    this.showUS = false
    this.isClickedUS = false;
    this.showIT = false;
    this.isClickedIT = false;
    this.showJP = false;
    this.isClickedJP = false;
  }

  btnLD(){
    this.ld = ! this.ld;
    this.lp = false;
    this.mc = false;
  }
  btnLP(){
    this.lp = ! this.lp;
    this.ld = false;
    this.mc = false;
  }
  btnMC(){
    this.mc = ! this.mc;
    this.ld = false;
    this.lp = false;
  }

  btnIT(){
    this.showIT = ! this.showIT;
    this.isClickedIT = ! this.isClickedIT;

    this.showBR = false;
    this.isClickedBR = false;
    this.showES = false;
    this.isClickedES = false;
    this.showPT = false;
    this.isClickedPT = false;
    this.showUS = false
    this.isClickedUS = false;
    this.showUK = false;
    this.isClickedUK = false;
    this.showJP = false;
    this.isClickedJP = false;
  }

  btnRM(){
    this.rm = ! this.rm;
    this.vn = false;
    this.ml = false;
    this.fr = false;
  }
  btnVN(){
    this.vn = ! this.vn;
    this.rm = false;
    this.ml = false;
    this.fr = false;
  }
  btnML(){
    this.ml = ! this.ml;
    this.rm = false;
    this.vn = false;
    this.fr = false;
  }
  btnFR(){
    this.fr = ! this.fr;
    this.rm = false;
    this.vn = false;
    this.ml = false;
  }

  btnJP(){
    this.showJP = ! this.showJP;
    this.isClickedJP = ! this.isClickedJP;

    this.showBR = false;
    this.isClickedBR = false;
    this.showES = false;
    this.isClickedES = false;
    this.showPT = false;
    this.isClickedPT = false;
    this.showUS = false
    this.isClickedUS = false;
    this.showUK = false;
    this.isClickedUK = false;
    this.showIT = false;
    this.isClickedIT = false;
  }

  btnTK(){
    this.tk = ! this.tk;
    this.kt = false;
    this.hs = false;
  }
  btnKT(){
    this.kt = ! this.kt;
    this.tk = false;
    this.hs = false;
  }
  btnHS(){
    this.hs = ! this.hs;
    this.tk = false;
    this.kt = false;
  }

  /*=============================================================================================================*/

  btnBR1(){
    this.showBR1 = ! this.showBR1;
    this.isClickedBR1 = ! this.isClickedBR1;

    this.showES1 = false;
    this.isClickedES1 = false;
    this.showPT1 = false;
    this.isClickedPT1 = false;
    this.showUS1 = false;
    this.isClickedUS1 = false;
    this.showUK1 = false
    this.isClickedUK1 = false;
    this.showIT1 = false;
    this.isClickedIT1 = false;
    this.showJP1 = false;
    this.isClickedJP1 = false;
  }

  btnSP1(){
    this.sp1 = ! this.sp1;
    this.bh1 = false;
    this.rj1 = false;
    this.cr1 = false;
  }
  btnBH1(){
    this.bh1 = ! this.bh1;
    this.sp1 = false;
    this.rj1 = false;
    this.cr1 = false;
  }
  btnRJ1(){
    this.rj1 = ! this.rj1;
    this.sp1 = false;
    this.bh1 = false;
    this.cr1 = false;
  }
  btnCR1(){
    this.cr1 = ! this.cr1;
    this.sp1 = false;
    this.bh1 = false;
    this.rj1 = false;
  }

  btnES1(){
    this.showES1 = ! this.showES1;
    this.isClickedES1 = ! this.isClickedES1;

    this.showBR1 = false;
    this.isClickedBR1 = false;
    this.showPT1 = false;
    this.isClickedPT1 = false;
    this.showUS1 = false;
    this.isClickedUS1 = false;
    this.showUK1 = false
    this.isClickedUK1 = false;
    this.showIT1 = false;
    this.isClickedIT1 = false;
    this.showJP1 = false;
    this.isClickedJP1 = false;
  }

  btnBC1(){
    this.bc1 = ! this.bc1;
    this.vl1 = false;
    this.md1 = false;
  }
  btnVL1(){
    this.vl1 = ! this.vl1;
    this.bc1 = false;
    this.md1 = false;
  }
  btnMD1(){
    this.md1 = ! this.md1;
    this.bc1 = false;
    this.vl1 = false;
  }

  btnPT1(){
    this.showPT1 = ! this.showPT1;
    this.isClickedPT1 = ! this.isClickedPT1;

    this.showBR1 = false;
    this.isClickedBR1 = false;
    this.showES1 = false;
    this.isClickedES1 = false;
    this.showUS1 = false;
    this.isClickedUS1 = false;
    this.showUK1 = false
    this.isClickedUK1 = false;
    this.showIT1 = false;
    this.isClickedIT1 = false;
    this.showJP1 = false;
    this.isClickedJP1 = false;
  }

  btnLB1(){
    this.lb1 = ! this.lb1;
    this.cb1 = false;
    this.po1= false;
  }
  btnCB1(){
    this.cb1 = ! this.cb1;
    this.lb1 = false;
    this.po1 = false;
  }
  btnPO1(){
    this.po1 = ! this.po1;
    this.lb1 = false;
    this.cb1 = false;
  }

  btnUS1(){
    this.showUS1 = ! this.showUS1;
    this.isClickedUS1 = ! this.isClickedUS1;

    this.showBR1 = false;
    this.isClickedBR1 = false;
    this.showES1 = false;
    this.isClickedES1 = false;
    this.showPT1 = false;
    this.isClickedPT1 = false;
    this.showUK1 = false
    this.isClickedUK1 = false;
    this.showIT1 = false;
    this.isClickedIT1 = false;
    this.showJP1 = false;
    this.isClickedJP1 = false;
  }

  btnSF1(){
    this.sf1 = ! this.sf1;
    this.lv1 = false;
    this.la1 = false;
    this.ny1 = false;
    this.ol1 = false;
  }
  btnLV1(){
    this.lv1 = ! this.lv1;
    this.sf1 = false;
    this.la1 = false;
    this.ny1 = false;
    this.ol1 = false;
  }
  btnLA1(){
    this.la1 = ! this.la1;
    this.sf1 = false;
    this.lv1 = false;
    this.ny1 = false;
    this.ol1 = false;
  }
  btnNY1(){
    this.ny1 = ! this.ny1;
    this.sf1 = false;
    this.lv1 = false;
    this.la1 = false;
    this.ol1 = false;
  }
  btnOL1(){
    this.ol1 = ! this.ol1;
    this.sf1 = false;
    this.lv1 = false;
    this.la1 = false;
    this.ny1 = false;
  }

  btnUK1(){
    this.showUK1 = ! this.showUK1;
    this.isClickedUK1 = ! this.isClickedUK1;

    this.showBR1 = false;
    this.isClickedBR1 = false;
    this.showES1 = false;
    this.isClickedES1 = false;
    this.showPT1 = false;
    this.isClickedPT1 = false;
    this.showUS1 = false
    this.isClickedUS1 = false;
    this.showIT1 = false;
    this.isClickedIT1 = false;
    this.showJP1 = false;
    this.isClickedJP1 = false;
  }

  btnLD1(){
    this.ld1 = ! this.ld1;
    this.lp1 = false;
    this.mc1 = false;
  }
  btnLP1(){
    this.lp1 = ! this.lp1;
    this.ld1 = false;
    this.mc1 = false;
  }
  btnMC1(){
    this.mc1 = ! this.mc1;
    this.ld1 = false;
    this.lp1 = false;
  }

  btnIT1(){
    this.showIT1 = ! this.showIT1;
    this.isClickedIT1 = ! this.isClickedIT1;

    this.showBR1 = false;
    this.isClickedBR1 = false;
    this.showES1 = false;
    this.isClickedES1 = false;
    this.showPT1 = false;
    this.isClickedPT1 = false;
    this.showUS1 = false
    this.isClickedUS1 = false;
    this.showUK1 = false;
    this.isClickedUK1 = false;
    this.showJP1 = false;
    this.isClickedJP1 = false;
  }

  btnRM1(){
    this.rm1 = ! this.rm1;
    this.vn1 = false;
    this.ml1 = false;
    this.fr1 = false;
  }
  btnVN1(){
    this.vn1 = ! this.vn1;
    this.rm1 = false;
    this.ml1 = false;
    this.fr1 = false;
  }
  btnML1(){
    this.ml1 = ! this.ml1;
    this.rm1 = false;
    this.vn1 = false;
    this.fr1 = false;
  }
  btnFR1(){
    this.fr1 = ! this.fr1;
    this.rm1 = false;
    this.vn1 = false;
    this.ml1 = false;
  }

  btnJP1(){
    this.showJP1 = ! this.showJP1;
    this.isClickedJP1 = ! this.isClickedJP1;

    this.showBR1 = false;
    this.isClickedBR1 = false;
    this.showES1 = false;
    this.isClickedES1 = false;
    this.showPT1 = false;
    this.isClickedPT1 = false;
    this.showUS1 = false
    this.isClickedUS1 = false;
    this.showUK1 = false;
    this.isClickedUK1 = false;
    this.showIT1 = false;
    this.isClickedIT1 = false;
  }

  btnTK1(){
    this.tk1 = ! this.tk1;
    this.kt1 = false;
    this.hs1 = false;
  }
  btnKT1(){
    this.kt1 = ! this.kt1;
    this.tk1 = false;
    this.hs1 = false;
  }
  btnHS1(){
    this.hs1 = ! this.hs1;
    this.tk1 = false;
    this.kt1 = false;
  }

  btnPronto(){
    this.router.navigate(['tabs'])
  }

}
