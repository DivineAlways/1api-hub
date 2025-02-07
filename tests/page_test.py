import pytest
from app.docs.platform.page import PlatformDocumentationPage

def test_platform_documentation_page_exists():
    """Test that the platform documentation page can be imported."""
    assert PlatformDocumentationPage is not None, "Platform documentation page should exist"

@pytest.mark.asyncio
async def test_platform_documentation_page_content():
    """Test that the platform documentation page loads content."""
    page = await PlatformDocumentationPage()
    assert page is not None, "Platform documentation page should render"
    assert "Platform Documentation" in str(page), "Page should have a title"
import pytest
from app.docs.platform.page import PlatformDocumentationPage

def test_platform_documentation_page_exists():
    """Test that the platform documentation page can be imported."""
    assert PlatformDocumentationPage is not None, "Platform documentation page should exist"

@pytest.mark.asyncio
async def test_platform_documentation_page_content():
    """Test that the platform documentation page loads content."""
    page = await PlatformDocumentationPage()
    assert page is not None, "Platform documentation page should render"
    assert "Platform Documentation" in str(page), "Page should have a title"
import pytest
from app.docs.platform.page import PlatformDocumentationPage

def test_platform_documentation_page_exists():
    """Test that the platform documentation page can be imported."""
    assert PlatformDocumentationPage is not None, "Platform documentation page should exist"

@pytest.mark.asyncio
async def test_platform_documentation_page_content():
    """Test that the platform documentation page loads content."""
    page = await PlatformDocumentationPage()
    assert page is not None, "Platform documentation page should render"
    assert "Platform Documentation" in str(page), "Page should have a title"
import pytest
from app.docs.platform.page import PlatformDocumentationPage

def test_platform_documentation_page_exists():
    """Test that the platform documentation page can be imported."""
    assert PlatformDocumentationPage is not None, "Platform documentation page should exist"

@pytest.mark.asyncio
async def test_platform_documentation_page_content():
    """Test that the platform documentation page loads content."""
    page = await PlatformDocumentationPage()
    assert page is not None, "Platform documentation page should render"
    assert "Platform Documentation" in str(page), "Page should have a title"
import pytest
from app.docs.platform.page import PlatformDocumentationPage

def test_platform_documentation_page_exists():
    """Test that the platform documentation page can be imported."""
    assert PlatformDocumentationPage is not None, "Platform documentation page should exist"

@pytest.mark.asyncio
async def test_platform_documentation_page_content():
    """Test that the platform documentation page loads content."""
    page = await PlatformDocumentationPage()
    assert page is not None, "Platform documentation page should render"
    assert "Platform Documentation" in str(page), "Page should have a title"
