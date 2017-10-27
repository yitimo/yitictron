import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { N163Service } from '../163.service';
import { DialogPopupComponent } from '../../../-shared';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    public words: string;
    public songs: any[];
    public songCount: number;
    public page: number;
    public state: string;
    constructor(
        private aRoute: ActivatedRoute,
        private n163: N163Service,
        public dialog: MatDialog
    ) {
        this.state = 'init';
    }

    public ngOnInit() {
        //
    }

    public onEnter(e: KeyboardEvent) {
        if (e.code === 'Enter') {
            if (this.words.length) {
                this.state = 'searching';
                this.page = 0;
                this.n163.Search(this.words, [1, this.page]).then((res) => {
                    this.songs = res.songs;
                    this.songCount = res.songCount;
                    this.state = 'searched';
                }).catch((err) => {
                    let dialogRef = this.dialog.open(DialogPopupComponent, {data: {msg: err}});
                    this.state = 'error';
                });
            }
        } else {
            // 关键词补全 暂时先不做
        }
    }

    public pageChange(e) {
        this.page = e.pageIndex;
        this.n163.Search(this.words, [1, this.page]).then((res) => {
            this.songs = res.songs;
            this.songCount = res.songCount;
        }).catch((err) => {
            let dialogRef = this.dialog.open(DialogPopupComponent, {data: {msg: err}});
        });
    }

    public test() {
        let http = window['ytcHttp'] || {request: () => {
            console.log('native node http disabled !');
        }};
        let req = http.request({
            hostname: 'soa.nbjy.org.cn',
            path: '/lemis/wservice/WssJy?wsdl',
            method: 'POST',
            headers: {
                'Content-Type': 'text/xml',
                'host': 'soa.nbjy.org.cn',
                'SOAPAction': ''
            }
        }, (res) => {
            let data = '';
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', (chunk) => {
                console.log(data);
                // let _res = new XMLDocument()..parse(data);
                // if (_res.code === 200) {
                //     console.log(_res.result);
                // } else {
                //     console.log(_res.msg || _res);
                // }
            });
            res.on('error', (chunk) => {
                console.log('请求出错');
            });
        });
        // tslint:disable:max-line-length
        req.write(`<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xmlns:tns="http://server.ws.tzsw.com/"><soap:Body><tns:tzc_sys_api><id>xml※nb_yw_01※96227319fd3c44b0aae7695a153e9ad4※0</id><cs>&lt;TZM&gt;&lt;TZH&gt;&lt;FWM&gt;SXPT_SXGW_CX&lt;/FWM&gt;&lt;BBH&gt;1.24&lt;/BBH&gt;&lt;SID&gt;*&lt;/SID&gt;&lt;/TZH&gt;&lt;TZB&gt;&lt;LX&gt;ALL&lt;/LX&gt;&lt;FY&gt;1※10&lt;/FY&gt;&lt;/TZB&gt;&lt;/TZM&gt;</cs></tns:tzc_sys_api></soap:Body></soap:Envelope>`);
        console.log(req);
        req.end();
    }
}
