import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UmRMComponent } from './umrm/um-rm.component';
import { AvaliacoesComponent } from './avaliacoes/avaliacoes.component';
import { CalculadorasComponent } from './calculadoras/calculadoras.component';
import { FcmComponent } from './fcm/fcm.component';
import { GraficosComponent } from './graficos/graficos.component';
import { HomeComponent } from './home/home.component';
import { ImcComponent } from './imc/imc.component';
import { NafComponent } from './naf/naf.component';
import { ParqComponent } from './parq/parq.component';
import { RcqComponent } from './rcq/rcq.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { RiscoCoroniarianComponent } from './riscocoronariano/risco-coroniarian.component';
import { IrcComponent } from './irc/irc.component';
import { SetedobrasComponent } from './setedobras/setedobras.component';
import { SobreComponent } from './sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    UmRMComponent,
    AvaliacoesComponent,
    CalculadorasComponent,
    FcmComponent,
    GraficosComponent,
    HomeComponent,
    ImcComponent,
    NafComponent,
    ParqComponent,
    RcqComponent,
    RelatoriosComponent,
    RiscoCoroniarianComponent,
    IrcComponent,
    SetedobrasComponent,
    SobreComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
