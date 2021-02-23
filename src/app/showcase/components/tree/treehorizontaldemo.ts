import {Component,OnInit} from '@angular/core';
import {NodeService} from '../../service/nodeservice';
import {TreeNode} from '@cyriacbr/primeng/api';

@Component({
    templateUrl: './treehorizontaldemo.html'
})
export class TreeHorizontalDemo implements OnInit {

    files: TreeNode[];

    selectedFile: TreeNode;
    
    constructor(private nodeService: NodeService) { }

    ngOnInit() {
        this.nodeService.getFiles().then(files => {
            this.files = [{
                label: 'Root',
                children: files
            }];
        });
    }
}