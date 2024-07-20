import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const CodeButtons = ({logo, title, code, react, html, css, tailwindcss }) => {
    return (
        <div>
            <Dialog>
                <DialogTrigger>
                    <Button variant="outline" className="text-xl">{logo}</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{title} Code</DialogTitle></DialogHeader>
                    <div className="overflow-y-scroll max-h-72">
                        <Editor
                            value={code}
                            onValueChange={code => setCode(code)}
                            highlight={code => highlight(code, languages.js)}
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 15,
                            }}
                            className="bg-slate-800 font-semibold text-white rounded-lg overflow-y-auto"
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default CodeButtons