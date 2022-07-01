import { Injectable } from '@angular/core';
const motoko_actor = require('src/declarations/motoko').motoko;
const motokoCreateActor = require('src/declarations/motoko').createActor;

@Injectable({
  providedIn: 'root'
})

export class MotokoService {

  constructor() {}
  public async greet(name:string): Promise<any>{
    
    return await motoko_actor.greet(name);
  }
  public async test(): Promise<any>{
    return await motokoCreateActor('rrkah-fqaaa-aaaaa-aaaaq-cai', {
      agentOptions: {
          host: 'http://localhost:8000'
      }
    }).test()
    //return await motoko_actor.test();
  }
}
