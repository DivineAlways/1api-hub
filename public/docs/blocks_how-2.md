The files you've shared are part of a modular system designed to handle different types of content blocks (text, images, code, and    
spreadsheets) in a collaborative environment. Here's a breakdown of how each file works and their interactions:                       

                                                         1. blocks/actions.ts                                                         

 • This file exports a server-side function getSuggestions, which retrieves suggestions for a document based on its ID.               
 • It calls the getSuggestionsByDocumentId function from the database queries to fetch the suggestions and returns them.              

                                                          2. blocks/text.tsx                                                          

 • This file defines a textBlock using the Block class, which represents a block of text content.                                     
 • The initialize method fetches suggestions for the document when the block is created and sets the metadata.                        
 • The onStreamPart method handles incoming streaming data, updating the block's content and visibility based on the type of data     
   received (suggestions or text deltas).                                                                                             
 • The content method renders the block's content, including an editor for text input and a diff view if in diff mode.                
 • It also defines actions (like viewing previous/next versions and copying content) and a toolbar for additional functionalities     
   (like requesting suggestions).                                                                                                     

                                                         3. blocks/image.tsx                                                          

 • This file defines an imageBlock for handling image content.                                                                        
 • Similar to the text block, it updates the block's content based on incoming streaming data (specifically for image deltas).        
 • The content method uses the ImageEditor component to render the image block.                                                       
 • It includes actions for viewing previous/next versions and copying the image to the clipboard.                                     

                                                          4. blocks/code.tsx                                                          

                                                          4. blocks/code.tsx                                                          


                                                       4. blocks/code.tsx                                                        

 • This file defines a codeBlock for handling code snippets.                                                                     
 • It initializes with an empty output array and processes incoming code deltas to update the block's content.                   
 • The content method renders a CodeEditor component and displays console outputs if any exist.                                  
 • It includes actions for running the code, viewing previous/next versions, and copying the code to the clipboard.              
 • The Run action executes the code using a Python environment (Pyodide) and captures output, which is then displayed in the     
   console.                                                                                                                      

                                                       5. blocks/sheet.tsx                                                       

 • This file defines a sheetBlock for handling spreadsheet content.                                                              
 • It initializes without any specific setup and updates the block's content based on incoming sheet deltas.                     
 • The content method renders a SpreadsheetEditor component for editing the spreadsheet.                                         
 • It includes actions for viewing previous/next versions and copying the content as a CSV file.                                 

                                                     Summary of Interactions                                                     

 • Each block type (text, image, code, sheet) is defined using the Block class, which encapsulates the behavior and properties of
   that block.                                                                                                                   
 • The blocks can handle streaming data, allowing for real-time updates and interactions.                                        
 • Actions and toolbars provide users with functionalities to manipulate the content, such as version control, copying, and      
   requesting suggestions.                                                                                                       
 • The system is designed to be modular, allowing for easy addition of new block types or functionalities in the future.         

Overall, these files work together to crea