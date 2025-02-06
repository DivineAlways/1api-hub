from PIL import Image
from google import genai

client = genai.Client(api_key="AIzaSyAYul_7VsT2qN3Ho_m0FIt8wQGpsSe72Cc")

image = Image.open("/path/to/organ.png")
response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents=[image, "Tell me about this instrument"])
print(response.text)