import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response

EMOJI_API_URL = "https://emojihub.yurace.pro/api/all"

@api_view(['GET'])
def get_emojis(request):
    try:
        response = requests.get(EMOJI_API_URL)
        response.raise_for_status()
        emojis = response.json()
        processed_emojis = []
        for emoji in emojis:
            processed_emojis.append({
                'name': emoji.get('name', ''),
                'category': emoji.get('category', ''),
                'group': emoji.get('group', ''),
                'htmlCode': emoji.get('htmlCode', []),
                'unicode': emoji.get('unicode', []),
            })
        return Response(processed_emojis)
    except requests.RequestException as e:
        return Response({'error': str(e)}, status=500)