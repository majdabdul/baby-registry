"""Download every item's `img` URL from data.js into img/<id>.jpg (max 480px, JPEG), so the site never depends on retailer hotlinking.
Usage: python3 tools/fetch_images.py   (run from the repo root; re-run after editing data.js — only missing files are fetched unless --force)."""
import io, json, re, subprocess, sys, urllib.request
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parent.parent
items = json.loads(subprocess.check_output(['node', '-e', "global.window={};require('./data.js');console.log(JSON.stringify(window.REGISTRY_ITEMS))"], cwd=root))
out = root / 'img'; out.mkdir(exist_ok=True)
force = '--force' in sys.argv
ok = fail = skip = 0
for it in items:
    url = it.get('img')
    if not url: continue
    dest = out / f"{it['id']}.jpg"
    if dest.exists() and not force: skip += 1; continue
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/130 Safari/537.36', 'Accept': 'image/*,*/*;q=0.8'})
        data = urllib.request.urlopen(req, timeout=30).read()
        im = Image.open(io.BytesIO(data))
        im = im.convert('RGBA') if im.mode in ('P', 'LA') else im
        if im.mode == 'RGBA':
            bg = Image.new('RGB', im.size, (255, 255, 255)); bg.paste(im, mask=im.split()[3]); im = bg
        im = im.convert('RGB'); im.thumbnail((480, 480))
        im.save(dest, 'JPEG', quality=82, optimize=True); ok += 1
    except Exception as e:
        print('FAIL', it['id'], url[:90], '->', e); fail += 1
print(f'downloaded {ok}, skipped {skip}, failed {fail}')
