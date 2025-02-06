from PIL import Image
import google.generativeai as genai

genai.configure(api_key="AIzaSyAYul_7VsT2qN3Ho_m0FIt8wQGpsSe72Cc")

image = Image.open("/path/to/organ.png")
model = genai.GenerativeModel('gemini-pro-vision')
response = model.generate_content([image, "Tell me about this instrument"])
print(response.text)
