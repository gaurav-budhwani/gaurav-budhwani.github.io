import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

const NotebookRenderer = ({ data }) => {
    if (!data || !data.cells) return null;

    return (
        <div className="w-full max-w-5xl mx-auto space-y-8 font-sans text-gray-800">
            {data.cells.map((cell, index) => (
                <div key={index} className="notebook-cell group">

                    {/* Markdown Cells */}
                    {cell.cell_type === 'markdown' && (
                        <div className="prose prose-lg max-w-none p-4 rounded-lg border border-transparent transition-colors hover:border-gray-100 hover:bg-gray-50/50">
                            <ReactMarkdown>
                                {Array.isArray(cell.source) ? cell.source.join('') : cell.source}
                            </ReactMarkdown>
                        </div>
                    )}

                    {/* Code Cells */}
                    {cell.cell_type === 'code' && (
                        <div className="space-y-3 my-6">
                            {/* Input Code */}
                            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200">
                                    <span className="text-xs font-mono text-gray-500">In [{cell.execution_count || ' '}]</span>
                                    {/* Mac-style window controls decoration */}
                                    <div className="flex gap-1.5 opacity-50 group-hover:opacity-100 transition-opacity">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                    </div>
                                </div>
                                <div className="text-sm">
                                    <SyntaxHighlighter
                                        language="python"
                                        style={vs}
                                        customStyle={{
                                            margin: 0,
                                            padding: '1rem',
                                            background: 'white',
                                            fontSize: '0.9rem',
                                            lineHeight: '1.5'
                                        }}
                                        wrapLongLines={true}
                                    >
                                        {Array.isArray(cell.source) ? cell.source.join('') : cell.source}
                                    </SyntaxHighlighter>
                                </div>
                            </div>

                            {/* Outputs */}
                            {cell.outputs && cell.outputs.length > 0 && (
                                <div className="pl-4 md:pl-0 space-y-3">
                                    {cell.outputs.map((output, i) => (
                                        <div key={i} className="output-container">
                                            {/* Text Output (Stream) */}
                                            {output.output_type === 'stream' && (
                                                <div className="relative">
                                                    <div className="absolute left-0 top-3 bottom-3 w-1 bg-gray-300 rounded-full"></div>
                                                    <pre className="text-xs md:text-sm font-mono text-gray-600 bg-gray-50 p-4 pl-6 rounded-r-lg overflow-x-auto whitespace-pre-wrap leading-relaxed">
                                                        {Array.isArray(output.text) ? output.text.join('') : output.text}
                                                    </pre>
                                                </div>
                                            )}

                                            {/* Execute Result or Display Data (Images/Text) */}
                                            {(output.output_type === 'execute_result' || output.output_type === 'display_data') && (
                                                <div className="py-2">
                                                    {output.data['image/png'] && (
                                                        <div className="inline-block bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                                                            <img
                                                                src={`data:image/png;base64,${output.data['image/png'].replace(/\n/g, '')}`}
                                                                alt="Notebook Output"
                                                                className="max-w-full h-auto rounded-lg"
                                                            />
                                                        </div>
                                                    )}
                                                    {output.data['text/plain'] && !output.data['image/png'] && (
                                                        <div className="relative">
                                                            <div className="absolute left-0 top-3 bottom-3 w-1 bg-blue-300 rounded-full"></div>
                                                            <pre className="text-xs md:text-sm font-mono text-gray-700 bg-blue-50/30 p-4 pl-6 rounded-r-lg overflow-x-auto">
                                                                {Array.isArray(output.data['text/plain'])
                                                                    ? output.data['text/plain'].join('')
                                                                    : output.data['text/plain']}
                                                            </pre>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default NotebookRenderer;
