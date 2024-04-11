import { Injectable } from '@angular/core';
import { GenericAsyncCRUDService } from './generic-async-crud.service';
import { Message } from '../entities/message';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MessageService extends GenericAsyncCRUDService<Message> {
  protected override _URL: string = 'http://localhost:8080/messages';

  private _currentMessage?: Message;

  public get currentMessage(): Message | undefined {
    return this._currentMessage;
  }
  public set currentMessage(value: Message) {
    this._currentMessage = value;
  }

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
